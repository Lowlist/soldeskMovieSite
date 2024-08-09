package com.team.cinema.movieInfo.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MovieApiDto {
	
    @JsonProperty("Query")
    private String query;  // 쿼리 문자열
    @JsonProperty("KMAQuery")
    private String kmaQuery;  // KMA 쿼리 문자열
    @JsonProperty("TotalCount")
    private int totalCount;  // 총 결과 개수
    @JsonProperty("Data")
    private List<Data> data;  // 데이터 리스트
    
    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getKmaQuery() {
        return kmaQuery;
    }

    public void setKmaQuery(String kmaQuery) {
        this.kmaQuery = kmaQuery;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public List<Data> getData() {
        return data;
    }

    public void setData(List<Data> data) {
        this.data = data;
    }

    // 내부 클래스 Data 정의
    public static class Data {
        @JsonProperty("CollName")
        private String collName;  // 컬렉션 이름
        @JsonProperty("TotalCount")
        private int totalCount;  // 총 개수
        @JsonProperty("Count")
        private int count;  // 개수
        @JsonProperty("Result")
        private List<MovieResult> result;  // 영화 결과 리스트
        
        public String getCollName() {
            return collName;
        }

        public void setCollName(String collName) {
            this.collName = collName;
        }

        public int getTotalCount() {
            return totalCount;
        }

        public void setTotalCount(int totalCount) {
            this.totalCount = totalCount;
        }

        public int getCount() {
            return count;
        }

        public void setCount(int count) {
            this.count = count;
        }

        public List<MovieResult> getResult() {
            return result;
        }

        public void setResult(List<MovieResult> result) {
            this.result = result;
        }
    }

    // 내부 클래스 MovieResult 정의
    public static class MovieResult {
        @JsonProperty("DOCID")
        private String docid;  // 문서 ID
        @JsonProperty("movieId")
        private String movieId;  // 영화 ID
        @JsonProperty("movieSeq")
        private String movieSeq;  // 영화 순번
        @JsonProperty("title")
        private String title;  // 제목
        @JsonProperty("titleEng")
        private String titleEng;  // 영어 제목
        @JsonProperty("titleOrg")
        private String titleOrg;  // 원제
        @JsonProperty("titleEtc")
        private String titleEtc;  // 기타 제목
        @JsonProperty("prodYear")
        private String prodYear;  // 제작 연도
        @JsonProperty("directors")
        private Director directors;  // 감독 정보
        @JsonProperty("actors")
        private Actor actors;  // 배우 정보
        @JsonProperty("nation")
        private String nation;  // 제작 국가
        @JsonProperty("company")
        private String company;  // 제작 회사
        @JsonProperty("plots")
        private Plot plots;  // 줄거리
        @JsonProperty("runtime")
        private int runtime;  // 상영 시간
        @JsonProperty("rating")
        private String rating;  // 등급
        @JsonProperty("genre")
        private String genre;  // 장르
        @JsonProperty("kmdbUrl")
        private String kmdbUrl;  // KMDB URL
        @JsonProperty("type")
        private String type;  // 타입
        @JsonProperty("use")
        private String use;  // 사용 여부
        @JsonProperty("episodes")
        private String episodes;  // 에피소드 수
        @JsonProperty("ratedYn")
        private String ratedYn;  // 등급 여부
        @JsonProperty("repRatDate")
        private String repRatDate;  // 대표 등급 날짜
        @JsonProperty("repRlsDate")
        private String repRlsDate;  // 대표 개봉 날짜
        @JsonProperty("ratings")
        private Ratings ratings;  // 등급 정보
        @JsonProperty("posters")
        private String posters;  // 포스터
        @JsonProperty("stlls")
        private String stlls;  // 스틸컷
        @JsonProperty("staffs")
        private Staff staffs;  // 스태프 정보
        @JsonProperty("vods")
        private Vods vods;  // VOD 정보
        @JsonProperty("openThtr")
        private String openThtr;  // 개봉 극장
        @JsonProperty("stat")
        private List<Stat> stat;  // 통계 정보
        @JsonProperty("screenArea")
        private String screenArea;  // 상영 지역
        @JsonProperty("screenCnt")
        private String screenCnt;  // 상영 횟수
        @JsonProperty("salesAcc")
        private String salesAcc;  // 누적 매출
        @JsonProperty("audiAcc")
        private String audiAcc;  // 누적 관객 수
        @JsonProperty("statSouce")
        private String statSouce;  // 통계 출처
        @JsonProperty("statDate")
        private String statDate;  // 통계 날짜
        @JsonProperty("themeSong")
        private String themeSong;  // 주제가
        @JsonProperty("soundtrack")
        private String soundtrack;  // 사운드트랙
        @JsonProperty("fLocation")
        private String fLocation;  // 촬영지
        @JsonProperty("Awards1")
        private String awards1;  // 수상 내역 1
        @JsonProperty("Awards2")
        private String awards2;  // 수상 내역 2
        @JsonProperty("regDate")
        private String regDate;  // 등록 날짜
        @JsonProperty("modDate")
        private String modDate;  // 수정 날짜
        @JsonProperty("Codes")
        private Codes codes;  // 코드 정보
        @JsonProperty("CommCodes")
        private CommCodes commCodes;  // 커뮤니티 코드 정보
        @JsonProperty("ALIAS")
        private String alias;  // 별칭
        @JsonProperty("keywords")
        private String keywords;  // 키워드
        
        // 각 필드의 getter와 setter 메소드들
        // 예시: getDocid(), setDocid(), getMovieId(), setMovieId(), ...
    }

    // 내부 클래스 Director 정의
    public static class Director {
        @JsonProperty("director")
        private List<DirectorDetail> director;  // 감독 상세 정보 리스트

        public List<DirectorDetail> getDirector() {
            return director;
        }

        public void setDirector(List<DirectorDetail> director) {
            this.director = director;
        }
    }

    // 내부 클래스 DirectorDetail 정의
    public static class DirectorDetail {
        @JsonProperty("directorNm")
        private String directorNm;  // 감독 이름
        @JsonProperty("directorEnNm")
        private String directorEnNm;  // 감독 영어 이름
        @JsonProperty("directorId")
        private String directorId;  // 감독 ID

        public String getDirectorNm() {
            return directorNm;
        }

        public void setDirectorNm(String directorNm) {
            this.directorNm = directorNm;
        }

        public String getDirectorEnNm() {
            return directorEnNm;
        }

        public void setDirectorEnNm(String directorEnNm) {
            this.directorEnNm = directorEnNm;
        }

        public String getDirectorId() {
            return directorId;
        }

        public void setDirectorId(String directorId) {
            this.directorId = directorId;
        }
    }

    // 내부 클래스 Actor 정의
    public static class Actor {
        @JsonProperty("actor")
        private List<ActorDetail> actor;  // 배우 상세 정보 리스트

        public List<ActorDetail> getActor() {
            return actor;
        }

        public void setActor(List<ActorDetail> actor) {
            this.actor = actor;
        }
    }

    // 내부 클래스 ActorDetail 정의
    public static class ActorDetail {
        @JsonProperty("actorNm")
        private String actorNm;  // 배우 이름
        @JsonProperty("actorEnNm")
        private String actorEnNm;  // 배우 영어 이름
        @JsonProperty("actorId")
        private String actorId;  // 배우 ID

        public String getActorNm() {
            return actorNm;
        }

        public void setActorNm(String actorNm) {
            this.actorNm = actorNm;
        }

        public String getActorEnNm() {
            return actorEnNm;
        }

        public void setActorEnNm(String actorEnNm) {
            this.actorEnNm = actorEnNm;
        }

        public String getActorId() {
            return actorId;
        }

        public void setActorId(String actorId) {
            this.actorId = actorId;
        }
    }

    // 내부 클래스 Plot 정의
    public static class Plot {
        @JsonProperty("plot")
        private List<PlotDetail> plot;  // 줄거리 상세 정보 리스트

        public List<PlotDetail> getPlot() {
            return plot;
        }

        public void setPlot(List<PlotDetail> plot) {
            this.plot = plot;
        }
    }

    // 내부 클래스 PlotDetail 정의
    public static class PlotDetail {
        @JsonProperty("plotLang")
        private String plotLang;  // 줄거리 언어
        @JsonProperty("plotText")
        private String plotText;  // 줄거리 내용

        public String getPlotLang() {
            return plotLang;
        }

        public void setPlotLang(String plotLang) {
            this.plotLang = plotLang;
        }

        public String getPlotText() {
            return plotText;
        }

        public void setPlotText(String plotText) {
            this.plotText = plotText;
        }
    }

    // 내부 클래스 Ratings 정의
    public static class Ratings {
        @JsonProperty("rating")
        private List<RatingDetail> rating;  // 등급 상세 정보 리스트

        public List<RatingDetail> getRating() {
            return rating;
        }

        public void setRating(List<RatingDetail> rating) {
            this.rating = rating;
        }
    }

    // 내부 클래스 RatingDetail 정의
    public static class RatingDetail {
        @JsonProperty("ratingMain")
        private String ratingMain;  // 주 등급
        @JsonProperty("ratingOrg")
        private String ratingOrg;  // 원 등급

        public String getRatingMain() {
            return ratingMain;
        }

        public void setRatingMain(String ratingMain) {
            this.ratingMain = ratingMain;
        }

        public String getRatingOrg() {
            return ratingOrg;
        }

        public void setRatingOrg(String ratingOrg) {
            this.ratingOrg = ratingOrg;
        }
    }

    // 내부 클래스 Staff 정의
    public static class Staff {
        @JsonProperty("staff")
        private List<StaffDetail> staff;  // 스태프 상세 정보 리스트

        public List<StaffDetail> getStaff() {
            return staff;
        }

        public void setStaff(List<StaffDetail> staff) {
            this.staff = staff;
        }
    }

    // 내부 클래스 StaffDetail 정의
    public static class StaffDetail {
        @JsonProperty("staffNm")
        private String staffNm;  // 스태프 이름
        @JsonProperty("staffEnNm")
        private String staffEnNm;  // 스태프 영어 이름
        @JsonProperty("staffId")
        private String staffId;  // 스태프 ID

        public String getStaffNm() {
            return staffNm;
        }

        public void setStaffNm(String staffNm) {
            this.staffNm = staffNm;
        }

        public String getStaffEnNm() {
            return staffEnNm;
        }

        public void setStaffEnNm(String staffEnNm) {
            this.staffEnNm = staffEnNm;
        }

        public String getStaffId() {
            return staffId;
        }

        public void setStaffId(String staffId) {
            this.staffId = staffId;
        }
    }

    // 내부 클래스 Vods 정의
    public static class Vods {
        @JsonProperty("vod")
        private List<VodDetail> vod;  // VOD 상세 정보 리스트

        public List<VodDetail> getVod() {
            return vod;
        }

        public void setVod(List<VodDetail> vod) {
            this.vod = vod;
        }
    }

    // 내부 클래스 VodDetail 정의
    public static class VodDetail {
        @JsonProperty("vodNm")
        private String vodNm;  // VOD 이름
        @JsonProperty("vodEnNm")
        private String vodEnNm;  // VOD 영어 이름
        @JsonProperty("vodId")
        private String vodId;  // VOD ID

        public String getVodNm() {
            return vodNm;
        }

        public void setVodNm(String vodNm) {
            this.vodNm = vodNm;
        }

        public String getVodEnNm() {
            return vodEnNm;
        }

        public void setVodEnNm(String vodEnNm) {
            this.vodEnNm = vodEnNm;
        }

        public String getVodId() {
            return vodId;
        }

        public void setVodId(String vodId) {
            this.vodId = vodId;
        }
    }

    // 내부 클래스 Stat 정의
    public static class Stat {
        @JsonProperty("stat")
        private List<StatDetail> stat;  // 통계 상세 정보 리스트

        public List<StatDetail> getStat() {
            return stat;
        }

        public void setStat(List<StatDetail> stat) {
            this.stat = stat;
        }
    }

    // 내부 클래스 StatDetail 정의
    public static class StatDetail {
        @JsonProperty("statMain")
        private String statMain;  // 주요 통계
        @JsonProperty("statOrg")
        private String statOrg;  // 원 통계

        public String getStatMain() {
            return statMain;
        }

        public void setStatMain(String statMain) {
            this.statMain = statMain;
        }

        public String getStatOrg() {
            return statOrg;
        }

        public void setStatOrg(String statOrg) {
            this.statOrg = statOrg;
        }
    }

    // 내부 클래스 Codes 정의
    public static class Codes {
        @JsonProperty("codes")
        private List<CodeDetail> codes;  // 코드 상세 정보 리스트

        public List<CodeDetail> getCodes() {
            return codes;
        }

        public void setCodes(List<CodeDetail> codes) {
            this.codes = codes;
        }
    }

    // 내부 클래스 CodeDetail 정의
    public static class CodeDetail {
        @JsonProperty("codeMain")
        private String codeMain;  // 주요 코드
        @JsonProperty("codeOrg")
        private String codeOrg;  // 원 코드

        public String getCodeMain() {
            return codeMain;
        }

        public void setCodeMain(String codeMain) {
            this.codeMain = codeMain;
        }

        public String getCodeOrg() {
            return codeOrg;
        }

        public void setCodeOrg(String codeOrg) {
            this.codeOrg = codeOrg;
        }
    }

    // 내부 클래스 CommCodes 정의
    public static class CommCodes {
        @JsonProperty("commCodes")
        private List<CommCodeDetail> commCodes;  // 커뮤니티 코드 상세 정보 리스트

        public List<CommCodeDetail> getCommCodes() {
            return commCodes;
        }

        public void setCommCodes(List<CommCodeDetail> commCodes) {
            this.commCodes = commCodes;
        }
    }

    // 내부 클래스 CommCodeDetail 정의
    public static class CommCodeDetail {
        @JsonProperty("commCodeMain")
        private String commCodeMain;  // 주요 커뮤니티 코드
        @JsonProperty("commCodeOrg")
        private String commCodeOrg;  // 원 커뮤니티 코드

        public String getCommCodeMain() {
            return commCodeMain;
        }

        public void setCommCodeMain(String commCodeMain) {
            this.commCodeMain = commCodeMain;
        }

        public String getCommCodeOrg() {
            return commCodeOrg;
        }

        public void setCommCodeOrg(String commCodeOrg) {
            this.commCodeOrg = commCodeOrg;
        }
    }
}
