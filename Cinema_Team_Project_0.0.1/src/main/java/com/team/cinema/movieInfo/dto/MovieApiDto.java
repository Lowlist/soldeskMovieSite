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

    // Getters and Setters
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

        // Getters and Setters
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

        // Getters and Setters
        public String getDocid() {
            return docid;
        }

        public void setDocid(String docid) {
            this.docid = docid;
        }

        public String getMovieId() {
            return movieId;
        }

        public void setMovieId(String movieId) {
            this.movieId = movieId;
        }

        public String getMovieSeq() {
            return movieSeq;
        }

        public void setMovieSeq(String movieSeq) {
            this.movieSeq = movieSeq;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getTitleEng() {
            return titleEng;
        }

        public void setTitleEng(String titleEng) {
            this.titleEng = titleEng;
        }

        public String getTitleOrg() {
            return titleOrg;
        }

        public void setTitleOrg(String titleOrg) {
            this.titleOrg = titleOrg;
        }

        public String getTitleEtc() {
            return titleEtc;
        }

        public void setTitleEtc(String titleEtc) {
            this.titleEtc = titleEtc;
        }

        public String getProdYear() {
            return prodYear;
        }

        public void setProdYear(String prodYear) {
            this.prodYear = prodYear;
        }

        public Director getDirectors() {
            return directors;
        }

        public void setDirectors(Director directors) {
            this.directors = directors;
        }

        public Actor getActors() {
            return actors;
        }

        public void setActors(Actor actors) {
            this.actors = actors;
        }

        public String getNation() {
            return nation;
        }

        public void setNation(String nation) {
            this.nation = nation;
        }

        public String getCompany() {
            return company;
        }

        public void setCompany(String company) {
            this.company = company;
        }

        public Plot getPlots() {
            return plots;
        }

        public void setPlots(Plot plots) {
            this.plots = plots;
        }

        public int getRuntime() {
            return runtime;
        }

        public void setRuntime(int runtime) {
            this.runtime = runtime;
        }

        public String getRating() {
            return rating;
        }

        public void setRating(String rating) {
            this.rating = rating;
        }

        public String getGenre() {
            return genre;
        }

        public void setGenre(String genre) {
            this.genre = genre;
        }

        public String getKmdbUrl() {
            return kmdbUrl;
        }

        public void setKmdbUrl(String kmdbUrl) {
            this.kmdbUrl = kmdbUrl;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
        }

        public String getUse() {
            return use;
        }

        public void setUse(String use) {
            this.use = use;
        }

        public String getEpisodes() {
            return episodes;
        }

        public void setEpisodes(String episodes) {
            this.episodes = episodes;
        }

        public String getRatedYn() {
            return ratedYn;
        }

        public void setRatedYn(String ratedYn) {
            this.ratedYn = ratedYn;
        }

        public String getRepRatDate() {
            return repRatDate;
        }

        public void setRepRatDate(String repRatDate) {
            this.repRatDate = repRatDate;
        }

        public String getRepRlsDate() {
            return repRlsDate;
        }

        public void setRepRlsDate(String repRlsDate) {
            this.repRlsDate = repRlsDate;
        }

        public Ratings getRatings() {
            return ratings;
        }

        public void setRatings(Ratings ratings) {
            this.ratings = ratings;
        }

        public String getPosters() {
            return posters;
        }

        public void setPosters(String posters) {
            this.posters = posters;
        }

        public String getStlls() {
            return stlls;
        }

        public void setStlls(String stlls) {
            this.stlls = stlls;
        }

        public Staff getStaffs() {
            return staffs;
        }

        public void setStaffs(Staff staffs) {
            this.staffs = staffs;
        }

        public Vods getVods() {
            return vods;
        }

        public void setVods(Vods vods) {
            this.vods = vods;
        }

        public String getOpenThtr() {
            return openThtr;
        }

        public void setOpenThtr(String openThtr) {
            this.openThtr = openThtr;
        }

        public List<Stat> getStat() {
            return stat;
        }

        public void setStat(List<Stat> stat) {
            this.stat = stat;
        }

        public String getScreenArea() {
            return screenArea;
        }

        public void setScreenArea(String screenArea) {
            this.screenArea = screenArea;
        }

        public String getScreenCnt() {
            return screenCnt;
        }

        public void setScreenCnt(String screenCnt) {
            this.screenCnt = screenCnt;
        }

        public String getSalesAcc() {
            return salesAcc;
        }

        public void setSalesAcc(String salesAcc) {
            this.salesAcc = salesAcc;
        }

        public String getAudiAcc() {
            return audiAcc;
        }

        public void setAudiAcc(String audiAcc) {
            this.audiAcc = audiAcc;
        }

        public String getStatSouce() {
            return statSouce;
        }

        public void setStatSouce(String statSouce) {
            this.statSouce = statSouce;
        }

        public String getStatDate() {
            return statDate;
        }

        public void setStatDate(String statDate) {
            this.statDate = statDate;
        }

        public String getThemeSong() {
            return themeSong;
        }

        public void setThemeSong(String themeSong) {
            this.themeSong = themeSong;
        }

        public String getSoundtrack() {
            return soundtrack;
        }

        public void setSoundtrack(String soundtrack) {
            this.soundtrack = soundtrack;
        }

        public String getfLocation() {
            return fLocation;
        }

        public void setfLocation(String fLocation) {
            this.fLocation = fLocation;
        }

        public String getAwards1() {
            return awards1;
        }

        public void setAwards1(String awards1) {
            this.awards1 = awards1;
        }

        public String getAwards2() {
            return awards2;
        }

        public void setAwards2(String awards2) {
            this.awards2 = awards2;
        }

        public String getRegDate() {
            return regDate;
        }

        public void setRegDate(String regDate) {
            this.regDate = regDate;
        }

        public String getModDate() {
            return modDate;
        }

        public void setModDate(String modDate) {
            this.modDate = modDate;
        }

        public Codes getCodes() {
            return codes;
        }

        public void setCodes(Codes codes) {
            this.codes = codes;
        }

        public CommCodes getCommCodes() {
            return commCodes;
        }

        public void setCommCodes(CommCodes commCodes) {
            this.commCodes = commCodes;
        }

        public String getAlias() {
            return alias;
        }

        public void setAlias(String alias) {
            this.alias = alias;
        }

        public String getKeywords() {
            return keywords;
        }

        public void setKeywords(String keywords) {
            this.keywords = keywords;
        }
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
        @JsonProperty("ratingDate")
        private String ratingDate;  // 등급 날짜
        @JsonProperty("ratingNo")
        private String ratingNo;  // 등급 번호
        @JsonProperty("releaseDate")
        private String releaseDate;  // 개봉 날짜
        @JsonProperty("ratingGrade")
        private String ratingGrade; // 시청 연령
        @JsonProperty("runtime")
        private int runtime; // 상영 시간

        // Getters and Setters
        public String getRatingMain() {
            return ratingMain;
        }

        public void setRatingMain(String ratingMain) {
            this.ratingMain = ratingMain;
        }

        public String getRatingDate() {
            return ratingDate;
        }

        public void setRatingDate(String ratingDate) {
            this.ratingDate = ratingDate;
        }

        public String getRatingNo() {
            return ratingNo;
        }

        public void setRatingNo(String ratingNo) {
            this.ratingNo = ratingNo;
        }

        public String getReleaseDate() {
            return releaseDate;
        }

        public void setReleaseDate(String releaseDate) {
            this.releaseDate = releaseDate;
        }

        public String getRatingGrade() {
            return ratingGrade;
        }

        public void setRatingGrade(String ratingGrade) {
            this.ratingGrade = ratingGrade;
        }

        public int getRuntime() {
            return runtime;
        }

        public void setRuntime(int runtime) {
            this.runtime = runtime;
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
        @JsonProperty("staffRoleGroup")
        private String staffRoleGroup; // 스태프 담당 업무
        @JsonProperty("staffRole")
        private String staffRole;
        @JsonProperty("staffEtc")
        private String staffEtc;

        // Getters and Setters
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

        public String getStaffRoleGroup() {
            return staffRoleGroup;
        }

        public void setStaffRoleGroup(String staffRoleGroup) {
            this.staffRoleGroup = staffRoleGroup;
        }

        public String getStaffRole() {
            return staffRole;
        }

        public void setStaffRole(String staffRole) {
            this.staffRole = staffRole;
        }

        public String getStaffEtc() {
            return staffEtc;
        }

        public void setStaffEtc(String staffEtc) {
            this.staffEtc = staffEtc;
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
        @JsonProperty("vodClass")
        private String vodClass;  // VOD 분류
        @JsonProperty("vodUrl")
        private String vodUrl;  // VOD URL

        // Getters and Setters
        public String getVodClass() {
            return vodClass;
        }

        public void setVodClass(String vodClass) {
            this.vodClass = vodClass;
        }

        public String getVodUrl() {
            return vodUrl;
        }

        public void setVodUrl(String vodUrl) {
            this.vodUrl = vodUrl;
        }
    }

    // 내부 클래스 Stat 정의
    public static class Stat {
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

        // Getters and Setters
        public String getScreenArea() {
            return screenArea;
        }

        public void setScreenArea(String screenArea) {
            this.screenArea = screenArea;
        }

        public String getScreenCnt() {
            return screenCnt;
        }

        public void setScreenCnt(String screenCnt) {
            this.screenCnt = screenCnt;
        }

        public String getSalesAcc() {
            return salesAcc;
        }

        public void setSalesAcc(String salesAcc) {
            this.salesAcc = salesAcc;
        }

        public String getAudiAcc() {
            return audiAcc;
        }

        public void setAudiAcc(String audiAcc) {
            this.audiAcc = audiAcc;
        }

        public String getStatSouce() {
            return statSouce;
        }

        public void setStatSouce(String statSouce) {
            this.statSouce = statSouce;
        }

        public String getStatDate() {
            return statDate;
        }

        public void setStatDate(String statDate) {
            this.statDate = statDate;
        }
    }

    // 내부 클래스 Codes 정의
    public static class Codes {
        @JsonProperty("Code")
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
        @JsonProperty("CodeNm")
        private String codeNm;  // 코드 이름
        @JsonProperty("CodeNo")
        private String codeNo;  // 코드 번호

        // Getters and Setters
        public String getCodeNm() {
            return codeNm;
        }

        public void setCodeNm(String codeNm) {
            this.codeNm = codeNm;
        }

        public String getCodeNo() {
            return codeNo;
        }

        public void setCodeNo(String codeNo) {
            this.codeNo = codeNo;
        }
    }

    // 내부 클래스 CommCodes 정의
    public static class CommCodes {
        @JsonProperty("CommCode")
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
        @JsonProperty("CodeNm")
        private String CodeNm;  // 코드 이름
        @JsonProperty("CodeNo")
        private String CodeNo;  // 코드 번호

        // Getters and Setters
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

        public String getCodeNm() {
            return CodeNm;
        }

        public void setCodeNm(String codeNm) {
            this.CodeNm = codeNm;
        }

        public String getCodeNo() {
            return CodeNo;
        }

        public void setCodeNo(String codeNo) {
            this.CodeNo = codeNo;
        }
    }
}
