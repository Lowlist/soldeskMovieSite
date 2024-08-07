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
import com.team.cinema.movieInfo.repository.ReviewRepository;

@Service
public class MovieInfoService {
	//로그찍는 함수
	private static final Logger logger = LoggerFactory.getLogger(MovieInfoService.class);
	
	private final String apiUrl = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2";
    private final String serviceKey = "BOC8E6E947M11OX4WO71";
    
    @Autowired
    private ReviewRepository reviewRepository;
    
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
            String response = restTemplate.getForObject(uri, String.class);
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
    
}
