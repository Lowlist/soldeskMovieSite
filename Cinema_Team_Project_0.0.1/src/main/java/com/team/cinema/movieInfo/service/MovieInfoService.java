package com.team.cinema.movieInfo.service;

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
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.team.cinema.movieInfo.dto.MovieApiDto;
import com.team.cinema.movieInfo.dto.ReviewDto;
import com.team.cinema.movieInfo.entity.MovieInfo;
import com.team.cinema.movieInfo.entity.Review;
import com.team.cinema.movieInfo.repository.MovieInfoRepository;
import com.team.cinema.movieInfo.repository.ReviewRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MovieInfoService {
	// 로그찍는 함수
	private static final Logger logger = LoggerFactory.getLogger(MovieInfoService.class);

	private final String apiUrl = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2";
	private final String serviceKey = "BOC8E6E947M11OX4WO71";

	@Autowired
	private MovieInfoRepository movieInfoRepository;

	// 영화목록 가져오기
	public List<MovieInfo> getMovies() {
		List<MovieInfo> movies = movieInfoRepository.findAll(); // DB에서 모든 영화 데이터 가져오기
		return movies;
	}

	// 영화 상세정보
	public Optional<MovieInfo> getMovieInfo(String DOCID) {
        // Optional<MovieInfo>를 반환
        return movieInfoRepository.findById(DOCID);
    }

	// 영화 자동 DB 저장
	@Scheduled(cron = "0 0 0 * * ?") // 매일 자정
	public void updateMovies() {
		try {
			RestTemplate restTemplate = new RestTemplate();// 기본 연결
			LocalDate oneMonthAgo = LocalDate.now().minusMonths(1);
			DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
			String releaseDts = oneMonthAgo.format(formatter);

			String requestUrl = UriComponentsBuilder.fromHttpUrl(apiUrl).queryParam("listCount", 50)
					.queryParam("releaseDts", URLEncoder.encode(releaseDts, StandardCharsets.UTF_8))
					.queryParam("detail", "Y")
					.queryParam("ServiceKey", URLEncoder.encode(serviceKey, StandardCharsets.UTF_8)).toUriString();
			URI uri = new URI(requestUrl);
			String response = restTemplate.getForObject(uri, String.class);
			log.info("API 응답: " + response);

			ObjectMapper mapper = new ObjectMapper();
			MovieApiDto movieApiResponse = mapper.readValue(response, MovieApiDto.class);
			if (movieApiResponse != null && movieApiResponse.getData() != null) {
				List<MovieInfo> movies = new ArrayList<>();
				for (MovieApiDto.Data data : movieApiResponse.getData()) {
					for (MovieApiDto.MovieResult result : data.getResult()) {
						System.out.println("응?" + result.getRepRlsDate());
						MovieInfo movie = new MovieInfo();
						movie.setDocId(result.getDocid());
						movie.setTitle(result.getTitle());
						movie.setReleaseDate(parseDate(result.getRepRlsDate()));
						movie.setDeadLine(LocalDateTime.now().plusMonths(1));
						movie.setRuntime(result.getRuntime());
						movie.setCompany(result.getCompany());
						if (result.getVods() != null && result.getVods().getVod() != null && !result.getVods().getVod().isEmpty()) {
						    // 각 VOD 항목을 "vodClass: vodUrl" 형식으로 연결
						    String vods = result.getVods().getVod().stream()
						                        .map(vod -> vod.getVodClass() + ": " + vod.getVodUrl()) // "클래스: URL" 형식으로 변환
						                        .collect(Collectors.joining(" | ")); // VOD 항목들을 " | "로 구분하여 연결
						    movie.setVideo(vods);
						}

						if (result.getStlls() != null && !result.getStlls().isEmpty()) {
							movie.setStlls(result.getStlls());
						}

						if (result.getPosters() != null && !result.getPosters().isEmpty()) {
							movie.setPoster(result.getPosters());
						} else {
							movie.setPoster("default_poster.png");
						}
						
						if(result.getDirectors() != null && result.getDirectors().getDirector() != null && !result.getDirectors().getDirector().isEmpty()) {
							String directors = result.getDirectors().getDirector().stream()
									                                             .map(director->director.getDirectorNm())
									                                             .collect(Collectors.joining(" , "));
							movie.setDirector(directors);
						}
						
						if(result.getActors() != null && result.getActors().getActor() != null && !result.getActors().getActor().isEmpty()) {
							String actors = result.getActors().getActor().stream()
									                                     .map(director->director.getActorNm())
									                                     .collect(Collectors.joining(" , "));
							movie.setActor(actors);
						}

						movie.setCategory(result.getGenre());
						movie.setNation(result.getNation());
						movie.setRating(result.getRating());
						movie.setReviewNo(1); // 예시로 1로 설정
						if (result.getPlots() != null && result.getPlots().getPlot() != null
								&& !result.getPlots().getPlot().isEmpty()) {
							movie.setContent(result.getPlots().getPlot().get(0).getPlotText());
						}
						movies.add(movie);
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

	public void saveMovies(List<MovieInfo> movies) {
		for (MovieInfo movie : movies) {
			if (!movieInfoRepository.existsById(movie.getDocId())) {
				movieInfoRepository.save(movie);
			}
		}
	}

}
