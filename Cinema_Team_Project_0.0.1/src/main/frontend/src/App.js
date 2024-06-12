import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import customAxios from './customAxios';
import movie from './images/movie.png';
import join from './images/join.png';
import login from './images/login.png';
import mypage from './images/mypage.png';
import search from './images/search.png';

function App() {
  // IP주소 변수 선언
  const [hello, setHello] = useState('');

  // // IP주소 값을 설정합니다.
  // function callback(data) {
  //   setIp(data);
  // }

  // // 첫번째 렌더링을 다 마친 후 실행합니다.
  // useEffect(
  //   () => {
  //     // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
  //     // customAxios('/ip', callback);
  //     axios.get('/api/hello')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log(error));
  //   }, []
  // );

  useEffect(() => {
    axios.get('/api/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error))
}, []);
  

  return (
<<<<<<< HEAD
    <div class="wrapper">
	        <div className="wrapper-header">
	            <div className="wrapper-header-top">
	                <div className="header-top-left">
	                    <img className="header-top-logo" src={movie}></img>
	                    <div className="header-top-title"><h1>영화 사이트</h1></div>
	                </div>
	                <div className="header-top-right">
	                    <div className="top-user" OnClick="location.href ='https://www.cgv.co.kr/'" style={ {cursor : 'pointer'} }>
	                        <img className="top-user-img" src={login}></img>
	                        <div className="top-user-btn">로그인</div>
	                    </div>
	                    <div className="top-user" OnClick="location.href ='https://www.cgv.co.kr/'" style={ {cursor : 'pointer'} }>
	                        <img className="top-user-img" src={join}></img>
	                        <div className="top-user-btn">회원가입</div>
	                    </div>
	                    <div className="top-user" OnClick="location.href ='https://www.cgv.co.kr/'" style={ {cursor : 'pointer'} }>
	                        <img className="top-user-img" src={mypage}></img>
	                        <div className="top-user-btn">마이페이지</div>
	                    </div>
	                </div>
	            </div>
	            <div className="wrapper-header-category">
	                <div className="category-left">
	                    <div className="header-category-btn">영화</div>
	                    <div className="header-category-btn">극장</div>
	                    <div className="header-category-btn">예매</div>
	                    <div className="header-category-btn">스토어</div>
	                    <div className="header-category-btn" id="service">고객센터</div>
	                </div>
	                <div className="category-right">
	                        <div className="search-box">
	                            <input id="searchBox" type="text" placeholder="영화 검색"></input>
	                        </div>
	                        <div className="search-btn">
	                            <img id="searchBtn" src={search}></img>
	                        </div>
	                </div>
	            </div>
	        </div>
	        <div className="wrapper-body">
	            <div className="body-video">무튼 비디오임</div>
	            <div className="body-chart">
	                <div className="chart-header">
	                    <div className="chart-title"><strong>무비 차트</strong></div>
	                    <div className="chart-subtitle1">현재 상영작</div>
	                    <div className="chart-subtitle2">상영 예정작</div>
	                </div>
	                <div className="chart-body">div 추가해야댐</div>
	            </div>
	            <div className="body-store">
	                <div className="store-header">
	                    <div className="store-title"><strong>스토어</strong></div>
	                    <div className="store-subtitle1">푸드</div>
	                    <div className="store-subtitle2">굿즈</div>
	                </div>
	                <div className="store-body">div 추가해야댐</div>
	            </div>
	            <div className="body-temporary">
	                <div className="temporary-header">
	                    <div className="temporary-title"><strong>임시</strong></div>
	                    <div className="temporary-subtitle1">하부1</div>
	                    <div className="temporary-subtitle2">하부2</div>
	                </div>
	                <div className="temporary-body">div 추가해야댐</div>
	            </div>
	        </div>
	        <div className="wrapper-footer">@팀명 Corp.</div>
	    </div>
=======
    <div className="App">
      <header className="App-header">
        백엔드에서 가져온 데이터 : {hello}
      </header>
    </div>
>>>>>>> 290f75008dd512009b03ae01bb45fe2ab840ee61
  );
}

export default App;