package com.team.cinema.ticketing.service;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.team.cinema.ticketing.Movie.ApiResponse;
import com.team.cinema.ticketing.Movie.Movie;

@Service
public class TicketingService {
    private static final Logger logger = LoggerFactory.getLogger(TicketingService.class);

    private final String apiUrl = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2";
    private final String serviceKey = "BOC8E6E947M11OX4WO71";

    public List<Movie> getMovies(String releaseDate) {
        try {

            String requestUrl = apiUrl + "&listCount=12&releaseDts=" + URLEncoder.encode(releaseDate, StandardCharsets.UTF_8)
            		+ "&detail=Y&Servicekey=" + URLEncoder.encode(serviceKey, StandardCharsets.UTF_8);
            
            URI uri = new URI(requestUrl);
            
            System.out.println(uri);
            RestTemplate restTemplate = new RestTemplate();
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<String> entity = new HttpEntity<>(headers);
            ResponseEntity<String> response = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class);

            String jsonResponse = response.getBody();

            // JSON 응답 파싱
            ObjectMapper objectMapper = new ObjectMapper();
            ApiResponse apiResponse = objectMapper.readValue(jsonResponse, ApiResponse.class);

            if (apiResponse.getData() != null) {
                return apiResponse.getData().stream()
                        .flatMap(data -> data.getResult().stream())
                        .filter(movie -> !"에로".equals(movie.getGenre()) && movie.getPosters() != null && !movie.getPosters().isEmpty())
                        .map(movie -> {
                            movie.setPosters(movie.getPosters().split("\\|")[0]); // 첫 번째 포스터 이미지
                            return movie;
                        })
                        .collect(Collectors.toList());
            }
        } catch (Exception e) {
        	System.out.println("못들옴?: " + e);
            logger.error("에러: ", e);
        }

        return List.of();
    }
}
