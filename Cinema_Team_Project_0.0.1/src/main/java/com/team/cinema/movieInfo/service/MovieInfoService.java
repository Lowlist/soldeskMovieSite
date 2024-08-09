package com.team.cinema.movieInfo.service;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.team.cinema.movieInfo.entity.Review;
import com.team.cinema.movieInfo.repository.MovieInfoRepository;
import com.team.cinema.movieInfo.repository.ReviewRepository;



@Service
public class MovieInfoService {
	//로그찍는 함수
	private static final Logger logger = LoggerFactory.getLogger(MovieInfoService.class);
	
	private final String apiUrl = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2";
    private final String serviceKey = "BOC8E6E947M11OX4WO71";
    
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MovieInfoRepository movieInfoRepository;
    
    //영화목록 가져오기
    public String getMovies(String releaseDate) {
    	try {
    		String requestUrl = UriComponentsBuilder.fromHttpUrl(apiUrl)
                    .queryParam("listCount", 10)
                    .queryParam("releaseDts", URLEncoder.encode(releaseDate, StandardCharsets.UTF_8))
                    .queryParam("detail", "Y")
                    .queryParam("ServiceKey", URLEncoder.encode(serviceKey, StandardCharsets.UTF_8))
                    .toUriString(); //문자열로 변환해주는 함수

    		URI uri = new URI(requestUrl);

            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<String> entity = new HttpEntity<>(headers);
            String response = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class).getBody();
            
            return response;
    	} catch (Exception e) {
    		 logger.error("에러: ", e);
		}
    	
    	return "{}"; //에러났을경우 리턴으로 확인하기 위해서 {}를 넣는다.
    }
    
    //영화 상세정보
    public String getMovieInfo(String movieId, String movieSeq) {
    	try {
    		String requestUrl = UriComponentsBuilder.fromHttpUrl(apiUrl)
    			    .queryParam("detail", "Y")
    			    .queryParam("movieId", URLEncoder.encode(movieId, StandardCharsets.UTF_8))
    			    .queryParam("movieSeq", URLEncoder.encode(movieSeq, StandardCharsets.UTF_8))
    			    .queryParam("ServiceKey", URLEncoder.encode(serviceKey, StandardCharsets.UTF_8))
    			    .toUriString(); // toString() 대신 toUriString() 사용
    		// 예시: https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&movieId=k&movieSeq=36201&ServiceKey=BOC8E6E947M11OX4WO71
    		
    		// 위에서 생성한 URL 문자열을 URI 객체로 변환합니다.
            URI uri = new URI(requestUrl);

            // RestTemplate 객체를 생성하여 HTTP 요청을 수행할 준비를 합니다.
            RestTemplate restTemplate = new RestTemplate();
            // HTTP 요청 헤더를 설정하기 위해 HttpHeaders 객체를 생성합니다.
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON); // 요청의 콘텐츠 타입을 JSON으로 설정

            // HttpEntity 객체를 생성하여 요청 헤더를 포함시킵니다.
            HttpEntity<String> entity = new HttpEntity<>(headers);
            
            // REST API에 GET 요청을 보내고, 응답을 String 형식으로 받습니다.
            String response = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class).getBody();
            
            // 응답 본문을 반환합니다.
            return response;
    	} catch(Exception e) {
    		logger.error("에러: ", e);
    	}
    	return "{}";
    }
    
    //영화 리뷰 DB연결
    public List<Review> getReviewByMovieNo(int movieNo) {
    	return reviewRepository.findByMovieNo(movieNo);
    }
    
//    //영화 자동 DB 저장
//    @Scheduled(cron = "0 0 0 * * ?")
//    public void updateMovies() {
//        try {
//            RestTemplate restTemplate = new RestTemplate();
//            LocalDate oneMonthAgo = LocalDate.now().minusMonths(1);
//            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
//            String releaseDts = oneMonthAgo.format(formatter);
//
//            String requestUrl = UriComponentsBuilder.fromHttpUrl(apiUrl)
//                    .queryParam("listCount", 10)
//                    .queryParam("releaseDts", URLEncoder.encode(releaseDts, StandardCharsets.UTF_8))
//                    .queryParam("detail", "Y")
//                    .queryParam("ServiceKey", URLEncoder.encode(serviceKey, StandardCharsets.UTF_8))
//                    .toUriString();
//            URI uri = new URI(requestUrl);
//            String response = restTemplate.getForObject(uri, String.class);
//            log.info("API 응답: " + response);
//
//            ObjectMapper mapper = new ObjectMapper();
//            MovieApiResponse movieApiResponse = mapper.readValue(response, MovieApiResponse.class);
//            if (movieApiResponse != null && movieApiResponse.getData() != null) {
//                List<Movie> movies = new ArrayList<>();
//                for (MovieApiResponse.Data data : movieApiResponse.getData()) {
//                    for (MovieApiResponse.MovieResult result : data.getResult()) {
//                    	System.out.println("응?" + result.getRepRlsDate());
//                        Movie movie = new Movie();
//                        movie.setDocId(result.getDocid());
//                        movie.setTitle(result.getTitle());
//                        movie.setReleaseDate(parseDate(result.getRepRlsDate()));
//                        movie.setDeadLine(LocalDateTime.now().plusMonths(1));
//                        movie.setRuntime(result.getRuntime());
//
//                        if (result.getPosters() != null && !result.getPosters().isEmpty()) {
//                            movie.setPoster(result.getPosters().split("\\|")[0]);
//                        } else {
//                            movie.setPoster("default_poster.png");
//                        }
//
//                        movie.setCategory(result.getGenre());
//                        movie.setNation(result.getNation());
//                        movie.setRating(result.getRating());
//                        movie.setReviewNo(1); // 예시로 1로 설정
//                        if (result.getPlots() != null && result.getPlots().getPlot() != null && !result.getPlots().getPlot().isEmpty()) {
//                            movie.setContent(result.getPlots().getPlot().get(0).getPlotText());
//                        }
//                        movies.add(movie);
//                    }
//                }
//                saveMovies(movies);
//            }
//        } catch (URISyntaxException e) {
//            System.err.println("URI 신택스 에러: " + e.getMessage());
//        } catch (Exception e) {
//            System.err.println("API 호출 오류: " + e.getMessage());
//        }
//    }
//
//    // 날짜 형식 변경
//    private LocalDateTime parseDate(String dateStr) {
//        if (!isValidDate(dateStr)) {
//            return LocalDateTime.now(); 
//        }
//        try {
//            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
//            return LocalDate.parse(dateStr, formatter).atStartOfDay();
//        } catch (DateTimeParseException e) {
//            logger.error("날짜 왜이럼: " + dateStr, e);
//            return LocalDateTime.now();
//        }
//    }
//
//    // 유효한 날짜 형식 확인
//    private boolean isValidDate(String dateStr) {
//        if (dateStr == null || dateStr.length() != 8) {
//            return false;
//        }
//
//        String yearStr = dateStr.substring(0, 4);
//        String monthStr = dateStr.substring(4, 6);
//        String dayStr = dateStr.substring(6, 8);
//
//        try {
//            int year = Integer.parseInt(yearStr);
//            int month = Integer.parseInt(monthStr);
//            int day = Integer.parseInt(dayStr);
//
//            if (month < 1 || month > 12) {
//                return false;
//            }
//            if (day < 1 || day > 31) {
//                return false;
//            }
//
//            // 2월 윤년이면 29일
//            if (month == 2) {
//                if (isLeapYear(year)) {
//                    return day <= 29;
//                } else {
//                    return day <= 28;
//                }
//            }
//
//            // 4, 6, 9, 11 총 30일
//            if (month == 4 || month == 6 || month == 9 || month == 11) {
//                return day <= 30;
//            }
//
//            return true; 
//        } catch (NumberFormatException e) {
//            return false; 
//        }
//    }
//    // 윤년확인
//    private boolean isLeapYear(int year) {
//        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
//    }
//    
//    public void saveMovies(List<MovieInfo> movies) {
//        for (MovieInfo movie : movies) {
//            if (!movieInfoRepository.existsById(movie.getDocId())) {
//            	movieInfoRepository.save(movie);
//            }
//        }
//    }
    
}
