package com.team.cinema.ticketing.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.team.cinema.ticketing.dto.MovieApiResponse;
import com.team.cinema.ticketing.entity.Cinema;
import com.team.cinema.ticketing.entity.Movie;
import com.team.cinema.ticketing.entity.Theater;
import com.team.cinema.ticketing.repository.CinemaRepository;
import com.team.cinema.ticketing.repository.MovieRepository;
import com.team.cinema.ticketing.repository.ScheduleRepository;
import com.team.cinema.ticketing.repository.TheaterRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class TicketingService {
    private static final Logger logger = LoggerFactory.getLogger(TicketingService.class);

    private final String apiUrl = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2";
    private final String serviceKey = "BOC8E6E947M11OX4WO71";
    
    @Autowired
    private CinemaRepository cinemaRepository;
    @Autowired
    private TheaterRepository theaterRepository;
    @Autowired
    private ScheduleRepository scheduleRepository;
    @Autowired
    private MovieRepository movieRepository;

    public String getMovies(String releaseDate) {
        try {
            String requestUrl = UriComponentsBuilder.fromHttpUrl(apiUrl)
                    .queryParam("listCount", 10)
                    .queryParam("releaseDts", URLEncoder.encode(releaseDate, StandardCharsets.UTF_8))
                    .queryParam("detail", "Y")
                    .queryParam("ServiceKey", URLEncoder.encode(serviceKey, StandardCharsets.UTF_8))
                    .toUriString();

            URI uri = new URI(requestUrl);

            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<String> entity = new HttpEntity<>(headers);
            String response = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class).getBody();
//          logger.info("Response Body: " + response);
            
            return response;
        } catch (Exception e) {
            logger.error("에러: ", e);
        }
        return "{}";
    }
    
    public List<Cinema> getTheatersByArea(String area) {
        return cinemaRepository.findByArea(area);
    }
    
    public List<Theater> getTheatersByCinema(int cinemaNo) {
        return theaterRepository.findByCinemaNo(cinemaNo);
    }

//    // 매번 자동 실행
//    @PostConstruct
//    public void updateMoviesOnStartup() {
//        updateMovies();
//    }

    // 영화 자동 DB 저장
    @Scheduled(cron = "0 0 0 * * ?")  // 매일 자정에 자동 실행
    public void updateMovies() {
        try {
            RestTemplate restTemplate = new RestTemplate();
            LocalDate oneMonthAgo = LocalDate.now().minusMonths(1);
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
            String releaseDts = oneMonthAgo.format(formatter);

            String requestUrl = UriComponentsBuilder.fromHttpUrl(apiUrl)
                    .queryParam("listCount", 10)
                    .queryParam("releaseDts", URLEncoder.encode(releaseDts, StandardCharsets.UTF_8))
                    .queryParam("detail", "Y")
                    .queryParam("ServiceKey", URLEncoder.encode(serviceKey, StandardCharsets.UTF_8))
                    .toUriString();
            URI uri = new URI(requestUrl);
            String response = restTemplate.getForObject(uri, String.class);
            log.info("API 응답: " + response);

            ObjectMapper mapper = new ObjectMapper();
            MovieApiResponse movieApiResponse = mapper.readValue(response, MovieApiResponse.class);
            if (movieApiResponse != null && movieApiResponse.getData() != null) {
                List<Movie> movies = new ArrayList<>();
                for (MovieApiResponse.Data data : movieApiResponse.getData()) {
                    for (MovieApiResponse.MovieResult result : data.getResult()) {
                    	System.out.println("응?" + result.getRepRlsDate());
                        Movie movie = new Movie();
                        if (result.getPosters() == null && result.getPosters().isEmpty()) {
                        	continue;
                        } else {
                        	movie.setPoster(result.getPosters().split("\\|")[0]);
                        	movie.setDocId(result.getDocid());
                            movie.setTitle(result.getTitle());
                            movie.setReleaseDate(parseDate(result.getRepRlsDate()));
                            movie.setDeadLine(LocalDateTime.now().plusMonths(1));
                            movie.setRuntime(result.getRuntime());
                            movie.setCategory(result.getGenre());
                            movie.setNation(result.getNation());
                            movie.setRating(result.getRating());
                            movie.setReviewNo(1);
                            if (result.getPlots() != null && result.getPlots().getPlot() != null && !result.getPlots().getPlot().isEmpty()) {
                                movie.setContent(result.getPlots().getPlot().get(0).getPlotText());
                            }
                            movies.add(movie);
                        }   
                    }
                }
                saveMovies(movies);
            }
        } catch (URISyntaxException e) {
            System.err.println("URI 신택스 에러: " + e.getMessage());
        } catch (Exception e) {
            System.err.println("API 호출 오류: " + e.getMessage());
        }
    }

    // 날짜 형식 변경
    private LocalDateTime parseDate(String dateStr) {
        if (!isValidDate(dateStr)) {
            return LocalDateTime.now(); 
        }
        try {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
            return LocalDate.parse(dateStr, formatter).atStartOfDay();
        } catch (DateTimeParseException e) {
            logger.error("날짜 왜이럼: " + dateStr, e);
            return LocalDateTime.now();
        }
    }

    // 유효한 날짜 형식 확인
    private boolean isValidDate(String dateStr) {
        if (dateStr == null || dateStr.length() != 8) {
            return false;
        }

        String yearStr = dateStr.substring(0, 4);
        String monthStr = dateStr.substring(4, 6);
        String dayStr = dateStr.substring(6, 8);

        try {
            int year = Integer.parseInt(yearStr);
            int month = Integer.parseInt(monthStr);
            int day = Integer.parseInt(dayStr);

            if (month < 1 || month > 12) {
                return false;
            }
            if (day < 1 || day > 31) {
                return false;
            }

            // 2월 윤년이면 29일
            if (month == 2) {
                if (isLeapYear(year)) {
                    return day <= 29;
                } else {
                    return day <= 28;
                }
            }

            // 4, 6, 9, 11 총 30일
            if (month == 4 || month == 6 || month == 9 || month == 11) {
                return day <= 30;
            }

            return true; 
        } catch (NumberFormatException e) {
            return false; 
        }
    }
    // 윤년확인
    private boolean isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    }

    public void saveMovies(List<Movie> movies) {
        for (Movie movie : movies) {
            if (!movieRepository.existsById(movie.getDocId())) {
                movieRepository.save(movie);
            }
        }
    }
}