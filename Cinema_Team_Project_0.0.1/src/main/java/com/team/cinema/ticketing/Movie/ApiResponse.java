package com.team.cinema.ticketing.Movie;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true) // 알려지지 않은 속성을 무시하도록 설정
public class ApiResponse {
    @JsonProperty("Query")
    private String query; // Query 필드 추가
    
    @JsonProperty("data")
    private List<Data> data;

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public List<Data> getData() {
        return data;
    }

    public void setData(List<Data> data) {
        this.data = data;
    }
}
