package com.team.cinema.ticketing.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MovieApiResponse {
	
	@JsonProperty("Query")
    private String query;
	@JsonProperty("KMAQuery")
    private String kmaQuery;
    @JsonProperty("TotalCount")
    private int totalCount;
    @JsonProperty("Data")
    private List<Data> data;
    
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

	public static class Data {
		@JsonProperty("CollName")
        private String collName;
        @JsonProperty("TotalCount")
        private int totalCount;
        @JsonProperty("Count")
        private int count;
        @JsonProperty("Result")
        private List<MovieResult> result;
        
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

    public static class MovieResult {
    	@JsonProperty("DOCID")
        private String docid;
        @JsonProperty("movieId")
        private String movieId;
        @JsonProperty("movieSeq")
        private String movieSeq;
        @JsonProperty("title")
        private String title;
        @JsonProperty("titleEng")
        private String titleEng;
        @JsonProperty("titleOrg")
        private String titleOrg;
        @JsonProperty("titleEtc")
        private String titleEtc;
        @JsonProperty("prodYear")
        private String prodYear;
        @JsonProperty("directors")
        private Director directors;
        @JsonProperty("actors")
        private Actor actors;
        @JsonProperty("nation")
        private String nation;
        @JsonProperty("company")
        private String company;
        @JsonProperty("plots")
        private Plot plots;
        @JsonProperty("runtime")
        private int runtime;
        @JsonProperty("rating")
        private String rating;
        @JsonProperty("genre")
        private String genre;
        @JsonProperty("kmdbUrl")
        private String kmdbUrl;
        @JsonProperty("type")
        private String type;
        @JsonProperty("use")
        private String use;
        @JsonProperty("episodes")
        private String episodes;
        @JsonProperty("ratedYn")
        private String ratedYn;
        @JsonProperty("repRatDate")
        private String repRatDate;
        @JsonProperty("repRlsDate")
        private String repRlsDate;
        @JsonProperty("ratings")
        private Ratings ratings;
        @JsonProperty("posters")
        private String posters;
        @JsonProperty("stlls")
        private String stlls;
        @JsonProperty("staffs")
        private Staff staffs;
        @JsonProperty("vods")
        private Vods vods;
        @JsonProperty("openThtr")
        private String openThtr;
        @JsonProperty("stat")
        private List<Stat> stat;
        @JsonProperty("screenArea")
        private String screenArea;
        @JsonProperty("screenCnt")
        private String screenCnt;
        @JsonProperty("salesAcc")
        private String salesAcc;
        @JsonProperty("audiAcc")
        private String audiAcc;
        @JsonProperty("statSouce")
        private String statSouce;
        @JsonProperty("statDate")
        private String statDate;
        @JsonProperty("themeSong")
        private String themeSong;
        @JsonProperty("soundtrack")
        private String soundtrack;
        @JsonProperty("fLocation")
        private String fLocation;
        @JsonProperty("Awards1")
        private String awards1;
        @JsonProperty("Awards2")
        private String awards2;
        @JsonProperty("regDate")
        private String regDate;
        @JsonProperty("modDate")
        private String modDate;
        @JsonProperty("Codes")
        private Codes codes;
        @JsonProperty("CommCodes")
        private CommCodes commCodes;
        @JsonProperty("ALIAS")
        private String alias;
        @JsonProperty("keywords")
        private String keywords;
        
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

    public static class Director {
    	@JsonProperty("director")
        private List<DirectorDetail> director;

		public List<DirectorDetail> getDirector() {
			return director;
		}

		public void setDirector(List<DirectorDetail> director) {
			this.director = director;
		}
    }

    public static class DirectorDetail {
    	@JsonProperty("directorNm")
        private String directorNm;
    	@JsonProperty("directorEnNm")
        private String directorEnNm;
    	@JsonProperty("directorId")
        private String directorId;
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

    public static class Actor {
    	@JsonProperty("actor")
        private List<ActorDetail> actor;

		public List<ActorDetail> getActor() {
			return actor;
		}

		public void setActor(List<ActorDetail> actor) {
			this.actor = actor;
		}
    }

    public static class ActorDetail {
    	@JsonProperty("actorNm")
        private String actorNm;
    	@JsonProperty("actorEnNm")
        private String actorEnNm;
    	@JsonProperty("actorId")
        private String actorId;
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

    public static class Plot {
    	@JsonProperty("plot")
        private List<PlotDetail> plot;

		public List<PlotDetail> getPlot() {
			return plot;
		}

		public void setPlot(List<PlotDetail> plot) {
			this.plot = plot;
		}
    }

    public static class PlotDetail {
    	@JsonProperty("plotLang")
        private String plotLang;
    	@JsonProperty("plotText")
        private String plotText;
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

    public static class Ratings {
    	@JsonProperty("rating")
        private List<RatingDetail> rating;

		public List<RatingDetail> getRating() {
			return rating;
		}

		public void setRating(List<RatingDetail> rating) {
			this.rating = rating;
		}
    }

    public static class RatingDetail {
    	@JsonProperty("ratingMain")
        private String ratingMain;
    	@JsonProperty("ratingDate")
        private String ratingDate;
    	@JsonProperty("ratingNo")
        private String ratingNo;
    	@JsonProperty("ratingGrade")
        private String ratingGrade;
    	@JsonProperty("releaseDate")
        private String releaseDate;
    	@JsonProperty("runtime")
        private String runtime;
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
		public String getRatingGrade() {
			return ratingGrade;
		}
		public void setRatingGrade(String ratingGrade) {
			this.ratingGrade = ratingGrade;
		}
		public String getReleaseDate() {
			return releaseDate;
		}
		public void setReleaseDate(String releaseDate) {
			this.releaseDate = releaseDate;
		}
		public String getRuntime() {
			return runtime;
		}
		public void setRuntime(String runtime) {
			this.runtime = runtime;
		}
    }

    public static class Staff {
    	@JsonProperty("staff")
        private List<StaffDetail> staff;

		public List<StaffDetail> getStaff() {
			return staff;
		}

		public void setStaff(List<StaffDetail> staff) {
			this.staff = staff;
		}
    }

    public static class StaffDetail {
    	@JsonProperty("staffNm")
        private String staffNm;
    	@JsonProperty("staffEnNm")
        private String staffEnNm;
    	@JsonProperty("staffRoleGroup")
        private String staffRoleGroup;
    	@JsonProperty("staffRole")
        private String staffRole;
    	@JsonProperty("staffEtc")
        private String staffEtc;
    	@JsonProperty("staffId")
        private String staffId;
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
		public String getStaffId() {
			return staffId;
		}
		public void setStaffId(String staffId) {
			this.staffId = staffId;
		}
    }

    public static class Vods {
    	@JsonProperty("vod")
        private List<VodDetail> vod;

		public List<VodDetail> getVod() {
			return vod;
		}

		public void setVod(List<VodDetail> vod) {
			this.vod = vod;
		}
    }

    public static class VodDetail {
    	@JsonProperty("vodClass")
        private String vodClass;
    	@JsonProperty("vodUrl")
        private String vodUrl;
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

    public static class Stat {
    	@JsonProperty("screenArea")
        private String screenArea;
    	@JsonProperty("screenCnt")
        private String screenCnt;
    	@JsonProperty("salesAcc")
        private String salesAcc;
    	@JsonProperty("audiAcc")
        private String audiAcc;
    	@JsonProperty("statSouce")
        private String statSouce;
    	@JsonProperty("statDate")
        private String statDate;
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

    public static class Codes {
    	@JsonProperty("Code")
        private List<CodeDetail> code;

		public List<CodeDetail> getCode() {
			return code;
		}

		public void setCode(List<CodeDetail> code) {
			this.code = code;
		}
    }

    public static class CodeDetail {
    	@JsonProperty("CodeNm")
        private String codeNm;
    	@JsonProperty("CodeNo")
        private String codeNo;
    	
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

    public static class CommCodes {
    	@JsonProperty("CommCode")
        private List<CommCodeDetail> commCode;

		public List<CommCodeDetail> getCommCode() {
			return commCode;
		}

		public void setCommCode(List<CommCodeDetail> commCode) {
			this.commCode = commCode;
		}
    }

    public static class CommCodeDetail {
    	@JsonProperty("CodeNm")
        private String codeNm;
    	@JsonProperty("CodeNo")
        private String codeNo;
    	
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
}
