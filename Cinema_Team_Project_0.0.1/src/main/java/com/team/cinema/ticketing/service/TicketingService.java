package com.team.cinema.ticketing.service;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.stream.Collectors;

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

    private final String apiUrl = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp";
    private final String serviceKey = "BOC8E6E947M11OX4WO71";

    public List<Movie> getMovies(String releaseDate) {
        try {
            String requestUrl = UriComponentsBuilder.fromHttpUrl(apiUrl)
                    .queryParam("collection", "kmdb_new2")
                    .queryParam("listCount", 12)
                    .queryParam("releaseDts", URLEncoder.encode(releaseDate, StandardCharsets.UTF_8))
                    .queryParam("detail", "Y")
                    .queryParam("ServiceKey", URLEncoder.encode(serviceKey, StandardCharsets.UTF_8))
                    .toUriString();

            URI uri = new URI(requestUrl);

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
            e.printStackTrace();
        }

        return List.of();
    }
}

