package com.team.cinema.ticketing.service;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class TicketingService {
    private static final Logger logger = LoggerFactory.getLogger(TicketingService.class);

    private final String apiUrl = "https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2";
    private final String serviceKey = "BOC8E6E947M11OX4WO71";

    public String getMovies(String releaseDate) {
        try {
            String requestUrl = UriComponentsBuilder.fromHttpUrl(apiUrl)
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
            String response = restTemplate.exchange(uri, HttpMethod.GET, entity, String.class).getBody();

            logger.info("Response Body: " + response);

            return response;
        } catch (Exception e) {
            logger.error("에러: ", e);
        }

        return "{}";
    }
}
