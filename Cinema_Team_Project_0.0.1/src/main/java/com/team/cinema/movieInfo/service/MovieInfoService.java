package com.team.cinema.movieInfo.service;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.team.cinema.ticketing.service.TicketingService;

@Service
public class MovieInfoService {
	//로그찍는 함수
	private static final Logger logger = LoggerFactory.getLogger(TicketingService.class);
	
	private final String apiUrl = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2";
    private final String serviceKey = "BOC8E6E947M11OX4WO71";
    
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
    public String getMovieInfo(String DOCID) {
    	try {
    		String requestUrl = UriComponentsBuilder.fromHttpUrl(apiUrl)
    				.queryParam("DOCID", URLEncoder.encode(DOCID, StandardCharsets.UTF_8))
    				.queryParam("detail", "Y")
                    .queryParam("ServiceKey", URLEncoder.encode(serviceKey, StandardCharsets.UTF_8))
    				.toString();
    		
    		 URI uri = new URI(requestUrl);
             RestTemplate restTemplate = new RestTemplate();
             String response = restTemplate.getForObject(uri, String.class);
             return response;
    	} catch(Exception e) {
    		logger.error("에러: ", e);
    	}
    	return "{}";
    }
    
}
