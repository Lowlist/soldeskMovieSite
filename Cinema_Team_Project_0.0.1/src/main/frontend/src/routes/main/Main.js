import React, { useState, useEffect } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import join from '../../images/join.png';
import login from '../../images/login.png';
import mypage from '../../images/mypage.png';
import search from '../../images/search.png';
import styles from './style/Main.module.css';
import axios from "axios";
import {
   NextTo,
   Prev,
   SliderContainer
} from './style/styles.js';

// 0.영화예고편 (하드코딩) 관리자기능에 추가하면 괜찮을지도?
// 1.영화정보 (제목,포스터,평점,예매율(하드코딩))
// 2.상점 (푸드,굿즈,영화관람권)
// 3.고객센터에 공지사항 1줄

function Main() {
   let navigate = useNavigate();
   let state = useSelector((state) => { return state });
   let [movieList, setMovieList] = useState(null);
   // 유즈이펙트 사용후 데이터 바인딩 해도 괜찮을듯?
   // 포스터 URL도 여기안에다가 넣어도 좋을듯?
   let movieChartData = [
      { id: 0, title: '임시 영화 제목1', preference: '80%', reservation: '70%' },
      { id: 1, title: '임시 영화 제목2', preference: '75%', reservation: '65%' },
      { id: 2, title: '임시 영화 제목3', preference: '75%', reservation: '65%' },
      { id: 3, title: '임시 영화 제목4', preference: '75%', reservation: '65%' },
      { id: 4, title: '임시 영화 제목5', preference: '75%', reservation: '65%' },
      { id: 5, title: '임시 영화 제목6', preference: '75%', reservation: '65%' },
      { id: 6, title: '임시 영화 제목7', preference: '75%', reservation: '65%' },
      { id: 7, title: '임시 영화 제목8', preference: '75%', reservation: '65%' },
      { id: 8, title: '임시 영화 제목9', preference: '75%', reservation: '65%' },
      { id: 9, title: '임시 영화 제목10', preference: '75%', reservation: '65%' }
   ];

   const [currentSlide, setCurrentSlide] = useState(0);
   const [totalSlides, setTotalSlides] = useState(movieChartData.length);

   // React-slick 세팅
   const settings = {
      variableWidth: false,
      slidesToShow: 5, //한 화면에 보여줄 요소 개수
      slidesToScroll: 5, //스와이프를 시 넘길 요소 개수
      infinite: false,
      autoplay: true,
      autoplaySpeed: 10000, // 자동 캐러셀 속도
      draggable: false, // 드래그
      nextArrow: <NextTo hidden={currentSlide >= totalSlides - 5} />,
      prevArrow: <Prev hidden={currentSlide === 0} />,
      beforeChange: (current, next) => setCurrentSlide(next)
   };

   return (
      <div className={styles['wrapper']}>
         <MovieHeader></MovieHeader>
         <div className={styles['wrapper-body']}>
            <div className={styles['body-video']}>
               <ReactPlayer
                  className={styles['background-video']}
                  url={"https://youtu.be/phuiiNCxRMg?si=VNb76MM_fBd7GHHe"}
                  width="100%"
                  height="100%"
                  loop={true}
                  playing={true}
                  muted={true}
                  controls={false} />

               {
                  // 예고편 데이터 바인딩
               }
               <div className={styles['video-div']}>
                  <div className={styles['video-title']}>에스파 - 슈퍼노바</div>
                  <div className={styles['video-info']}>에스파 윈터 vs 카리나 당신의 선택은???</div>
                  <Button className={styles['video-button']} onClick={() => { navigate('/') }} variant="light">상세보기 {'>'}</Button>{' '}
               </div>
            </div>
            <div className={styles['body-chart']}>
               <div className={styles['chart-header']}>
                  <div className={styles['chart-title']}><strong>무비 차트</strong></div>
                  {/* 컴포넌트 전환 후 데이터 바인딩 로직 */}
                  {/* 컴포넌트는 내부에있는 데이터만 3항연산자로 true or false 조건으로 가져오면 될듯? */}
                  {/* 우리가 영화 정보자체를 데이터베이스에 담을예정인데 그걸 가져오면됨. */}
                  <div className={styles['chart-subtitle1']} onClick={() => { }}>현재 상영작</div>
                  {/* 상영예정작은 ver2에서 구현하기로함. */}
                  <div className={styles['chart-subtitle2']} onClick={() => { }}>상영 예정작</div>
                  <div className={styles['chart-button']}>
                     <button className={styles['all-button']} onClick={() => { navigate('/ticketing') }}>전체보기 {'>'}</button>
                  </div>
               </div>
               {/* 슬라이더 내부 데이터 바인딩 포스터,제목,평점,예매율 */}
               <SliderContainer>
                  <Slider {...settings}>
                     {
                        movieChartData.map((movie, i) => {
                           return (
                              <MovieChart key={i} i={i} movieData={movieChartData}></MovieChart>
                           )
                        })
                     }
                  </Slider>
               </SliderContainer>
            </div>
            <div className={styles['body-store']}>
               <div className={styles['body-store-wrapper']}>
                  <div className={styles['store-wrapper']}>
                     <div className={styles['store-header']}>
                        <div className={styles['store-title']}><strong>푸드</strong></div>
                        <div className={styles['store-more-button']} onClick={() => { navigate('/store') }}>더보기</div>
                     </div>
                     {/* 음식 이미지,굿즈 이미지,관람권 이미지 제목,가격 바인딩 */}
                     {/* 이미지 URL은 리덕스에 넣을 예정이니 그거 가져가서 바인딩 하면 됨 */}
                     {/* js내부에서 할꺼면 img 태그를 사용하거나 새로운 스타일 변수를 만들어서 적용시키는 방법밖에 없슴.*/}
                     {/* css에 리덕스 전송이 불가능 하기 때문 */}
                     <div className={styles['store-body']}>
                        {
                           [1, 2, 3].map((foods, i) => {
                              return (
                                 <div className={styles['body-wrapper']}>
                                    <div className={styles['store-img']}>팝콘이미지</div>
                                    <div className={styles['store-sub']}>
                                       <div className={styles['store-subtitle']}>{state.shop[i].title}</div>
                                       <div className={styles['store-price']}><strong>{state.shop[i].price.toLocaleString("ko-KR")}원</strong></div>
                                    </div>
                                 </div>
                              )
                           })
                        }
                     </div>
                  </div>

                  <div className={styles['store-wrapper']}>
                     <div className={styles['store-header']}>
                        <div className={styles['store-title']}><strong>굿즈</strong></div>
                        <div className={styles['store-more-button']} onClick={() => { navigate('/store') }}>더보기</div>
                     </div>
                     <div className={styles['store-body']}>
                        {
                           [1, 2, 3].map((foods, i) => {
                              return (
                                 <div className={styles['body-wrapper']}>
                                    <div className={styles['store-img']}>굿즈이미지</div>
                                    <div className={styles['store-sub']}>
                                       <div className={styles['store-subtitle']}>{state.shop[i].title}</div>
                                       <div className={styles['store-price']}><strong>{state.shop[i].price.toLocaleString("ko-KR")}원</strong></div>
                                    </div>
                                 </div>
                              )
                           })
                        }
                     </div>
                  </div>
                  <div className={styles['store-wrapper']}>
                     <div className={styles['store-header']}>
                        <div className={styles['store-title']}><strong>영화관람권</strong></div>
                        <div className={styles['store-more-button']} onClick={() => { navigate('/store') }}>더보기</div>
                     </div>
                     <div className={styles['store-body']}>
                        {
                           [1, 2, 3].map((foods, i) => {
                              return (
                                 <div className={styles['body-wrapper']}>
                                    <div className={styles['store-img']}>팝콘이미지</div>
                                    <div className={styles['store-sub']}>
                                       <div className={styles['store-subtitle']}>{state.shop[i].title}</div>
                                       <div className={styles['store-price']}><strong>{state.shop[i].price.toLocaleString("ko-KR")}원</strong></div>
                                    </div>
                                 </div>
                              )
                           })
                        }
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles['announcement-div']}>
               <div className={styles['announcement-body']}>
                  <div className={styles['announcement-service']}>
                     <div className={styles['announcement-main']}>
                        <div className={styles['announcement-title']}>
                           <strong>공지사항</strong>
                        </div>
                        {/* 공지사항 1줄 데이터 바인딩 */}
                        <div className={styles['announcement-list']}>
                           공지사항 리스트 1
                        </div>
                        <div className={styles['announcement-button']}>
                           <div className={styles['announcement-button-click']}>
                              더보기
                           </div>
                        </div>
                     </div>
                     <div className={styles['service-center']}>
                        <div className={styles['service-body']}>
                           <div className={styles['service-title']}>
                              <strong>고객센터</strong>
                           </div>
                           <div className={styles['service-subdiv']}>
                              <div className={styles['service-number']}>
                                 1544-1122
                              </div>
                              <div className={styles['service-time']}>
                                 고객센터 운영시간 {'('}평일 09:00 ~ 18:00{')'}
                              </div>
                              <div className={styles['service-info']}>
                                 업무시간 외 자동응답 안내 가능합니다.
                              </div>
                           </div>
                        </div>
                        <div className={styles['service-footer']}>
                           <div className={styles['service-button-div']}>
                              <button className={styles['service-button']}>FAQ</button>
                           </div>
                           <div className={styles['service-button-div2']}>
                              <button className={styles['service-button2']}>1:1문의</button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles['app-download']}>
                     <div className={styles['app-div']}>
                        <div className={styles['app-title']}>
                           <strong>앱 다운로드</strong>
                        </div>
                        <div className={styles['app-info']}>
                           씨네망가앱에서 더 편리하게 이용하세요
                        </div>
                        <div className={styles['app-qr']}>
                           대충 QR 이미지
                        </div>
                        <div className={styles['qr-info']}>
                           QR코드를 스캔하고
                           <br></br>
                           앱설치 페이지로 바로 이동하세요
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={styles['wrapper-footer']}>@Dream Ticket Office Corp.</div>
      </div>
   )
}

function MovieChart(props) {
   let navigate = useNavigate();
   let [show, setShow] = useState(false);
   console.log(props.i);
   return (
      <div className={styles['chart-body']}>
         <div className={styles['chart-movie']} onMouseEnter={() => { setShow(true) }} onMouseLeave={() => { setShow(false) }}>
            임시 영화 포스터
            <div className={show ? styles['chart-movie-button2'] : styles['chart-movie-button']}>
               {/* 네비게이트만 하면됨. */}
               <button className={styles['chart-button1']} onClick={() => { navigate('/') }}>상세보기</button>
               <button className={styles['chart-button2']} onClick={() => { navigate('/') }}>예매하기</button>
            </div>
         </div>
         {/* 여기도 영화데이터 있는 부분에서 redux state 땡겨오면됨 */}
         <div className={styles['chart-movie-title']}>
            {props.movieData[props.i].title}
         </div>
         <div className={styles['chart-movie-info']}>
            <div className={styles['chart-movie-preference']}>
               {props.movieData[props.i].preference}
            </div>
            <div className={styles['chart-movie-reservation']}>
               예매율 {props.movieData[props.i].reservation}
            </div>
         </div>
      </div>
   )
}

function MovieHeader() {
   let navigate = useNavigate();
   let [session, setSession] = useState(false);
   return (
      <div className={styles['wrapper-header']}>
         <div className={styles['wrapper-header-top']}>
            <div className={styles['header-top-left']}>
               {/* <img className="header-top-logo" src={movie}></img> */}
               <div className={styles['header-top-title']}>
                  <p onClick={() => { navigate('/') }}>
                     씨네 망가
                  </p>
               </div>
            </div>
            <div className={session ? styles['header-top-right-login'] : styles['header-top-right-logout']}>
               <div className={styles['top-user']} onClick={() => { navigate('/member/signIn') }} style={{ cursor: 'pointer' }}>
                  <img className={styles['top-user-img']} src={login}></img>
                  <div className={styles['top-user-btn']}>로그인</div>
               </div>
               <div className={styles['top-user']} onClick={() => { navigate('/member/signUp') }} style={{ cursor: 'pointer' }}>
                  <img className={styles['top-user-img']} src={join}></img>
                  <div className={styles['top-user-btn']}>회원가입</div>
               </div>
               <div className={styles['top-user']} onClick={() => { navigate('/member/mypage') }} style={{ cursor: 'pointer' }}>
                  <img className={styles['top-user-img']} src={mypage}></img>
                  <div className={styles['top-user-btn']}>마이페이지</div>
               </div>
            </div>
         </div>
         <Navbar className={styles['wrapper-header-line']} data-bs-theme="light">
            <div className={styles['wrapper-header-category']}>
               <div className={styles['category-left']}>
                  <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                  <Nav.Link onClick={() => { navigate('/store') }}>shop</Nav.Link>
                  <Nav.Link onClick={() => { navigate('/ticket') }}>ticketing</Nav.Link>
                  <Nav.Link onClick={() => { navigate('/gps/map') }}>카카오맵</Nav.Link>
                  <Nav.Link onClick={() => { navigate('/support') }}>고객센터</Nav.Link>
               </div>
               <div className={styles['category-right']}>
                  <div className={styles['search-box']}>
                     <input id={styles['searchBox']} type="text" placeholder="영화 검색"></input>
                  </div>
                  <div className={styles['search-btn']}>
                     <img className={styles['searchBtn']} src={search}></img>
                  </div>
               </div>
            </div>
         </Navbar>
      </div>
   )
}


export default Main;