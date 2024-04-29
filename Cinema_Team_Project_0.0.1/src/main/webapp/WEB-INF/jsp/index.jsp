<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8">
<title>버거킹</title>
<link rel="stylesheet" href="/static/css/index.css">
</head>
	<body>
	    <div class="wrapper">
	        <div class="wrapper-header">
	            <div class="wrapper-header-top">
	                <div class="header-top-left">
	                    <img class="header-top-logo" src="./images/movie.png">
	                    <div class="header-top-title"><h1>영화 사이트</h1></div>
	                </div>
	                <div class="header-top-right">
	                    <div class="top-user" OnClick="location.href ='https://www.cgv.co.kr/'" style="cursor:pointer;">
	                        <img class="top-user-img" src="./images/login.png">
	                        <div class="top-user-btn">로그인</div>
	                    </div>
	                    <div class="top-user" OnClick="location.href ='https://www.cgv.co.kr/'" style="cursor:pointer;">
	                        <img class="top-user-img" src="./images/join.png">
	                        <div class="top-user-btn">회원가입</div>
	                    </div>
	                    <div class="top-user" OnClick="location.href ='https://www.cgv.co.kr/'" style="cursor:pointer;">
	                        <img class="top-user-img" src="./images/mypage.png">
	                        <div class="top-user-btn">마이페이지</div>
	                    </div>
	                </div>
	            </div>
	            <div class="wrapper-header-category">
	                <div class="category-left">
	                    <div class="header-category-btn">영화</div>
	                    <div class="header-category-btn">극장</div>
	                    <div class="header-category-btn">예매</div>
	                    <div class="header-category-btn">스토어</div>
	                    <div class="header-category-btn" id="service">고객센터</div>
	                </div>
	                <div class="category-right">
	                        <div class="search-box">
	                            <input id="searchBox" type="text" placeholder="영화 검색">
	                        </div>
	                        <div class="search-btn">
	                            <img id="searchBtn" src="./images/search.png">
	                        </div>
	                </div>
	            </div>
	        </div>
	        <div class="wrapper-body">
	            <div class="body-video">무튼 비디오임</div>
	            <div class="body-chart">
	                <div class="chart-header">
	                    <div class="chart-title"><strong>무비 차트</strong></div>
	                    <div class="chart-subtitle1">현재 상영작</div>
	                    <div class="chart-subtitle2">상영 예정작</div>
	                </div>
	                <div class="chart-body">div 추가해야댐</div>
	            </div>
	            <div class="body-store">
	                <div class="store-header">
	                    <div class="store-title"><strong>스토어</strong></div>
	                    <div class="store-subtitle1">푸드</div>
	                    <div class="store-subtitle2">굿즈</div>
	                </div>
	                <div class="store-body">div 추가해야댐</div>
	            </div>
	            <div class="body-temporary">
	                <div class="temporary-header">
	                    <div class="temporary-title"><strong>임시</strong></div>
	                    <div class="temporary-subtitle1">하부1</div>
	                    <div class="temporary-subtitle2">하부2</div>
	                </div>
	                <div class="temporary-body">div 추가해야댐</div>
	            </div>
	        </div>
	        <div class="wrapper-footer">@팀명 Corp.</div>
	    </div>
	</body>
</html>