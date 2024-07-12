<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인이에용</title>
<link rel="stylesheet" href="/static/css/signIn.css">
</head>
<body>
    <div class="wrapper">
        <div class="wrapper-header">
            <div class="wrapper-header-top">
                <div class="header-top-left">
                    <img class="header-top-logo" src="/static/images/movie.png">
                    <div class="header-top-title"><h1>영화 사이트</h1></div>
                </div>
                <div class="header-top-right">
                    <div class="top-user" OnClick="location.href ='https://www.cgv.co.kr/'" style="cursor:pointer;">
                        <img class="top-user-img" src="/static/images/login.png">
                        <div class="top-user-btn">로그인</div>
                    </div>
                    <div class="top-user" OnClick="location.href ='https://www.cgv.co.kr/'" style="cursor:pointer;">
                        <img class="top-user-img" src="/static/images/join.png">
                        <div class="top-user-btn">회원가입</div>
                    </div>
                    <div class="top-user" OnClick="location.href ='https://www.cgv.co.kr/'" style="cursor:pointer;">
                        <img class="top-user-img" src="/static/images/mypage.png">
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
                            <img id="searchBtn" src="/static/images/search.png">
                        </div>
                </div>
            </div>
        </div>
        <div class="wrapper-body">
            <div class="wrapper-loginbox">
                <div class="loginbox-top">
                    <div class="top-title">로그인</div>
                    <div class="divideLine"></div>
                </div>
                <div class="loginbox-explanation">아이디와 비밀번호를 입력하신 후, 로그인 버튼을 클릭해주세요.</div>
                <div class="loginbox-body">
                    <div class="loginbox-loginform">
                        <form action="" method="">
                            <div class="loginform">
                                <img class="icon" src="/static/images/login.png">
                                <input class="input-box" name="id" placeholder="아이디를 입력해주세요.">
                            </div>
                            <div class="loginform">
                                <img class="icon" src="/static/images/login.png">
                                <input class="input-box" type="password" name="pw" placeholder="비밀번호를 입력해주세요.">
                            </div>
                            <div class="loginform">
                                <input class="login-button" type="submit" value="로그인">
                            </div>
                        </form>
                    </div>
                </div>
                <div class="loginbox-forget">
                    <div class="forget-id"><a href="">아이디찾기 ></a></div>
                    <div class="forget-pw"><a href="">비밀번호찾기 ></a></div>
                </div>
            </div>
        </div>
        <div class="wrapper-ad">
            임시
        </div>
        <div class="wrapper-footer">우리의 마음은 하나 아이가. 남자다잉 Corp.</div>
    </div>
</body>
</html>