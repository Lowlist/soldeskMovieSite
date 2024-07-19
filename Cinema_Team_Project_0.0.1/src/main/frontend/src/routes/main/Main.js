import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style/Main.module.css';
import ReactPlayer from 'react-player';
import Button from 'react-bootstrap/Button';
import search from '../../images/search.png';
import login from '../../images/login.png';
import logout from '../../images/logout.png';
import mypage from '../../images/mypage.png';
import join from '../../images/join.png';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from "react";
import {
	SliderContainer,
	NextTo,
	Prev
  } from './style/styles.js'

function Main() {
    let navigate = useNavigate();
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
            <div className={styles['wrapper-header-top']}>
	            <div className={styles['header-top-left']}>
	                {/* <img className="header-top-logo" src={movie}></img> */}
	                <div className={styles['header-top-title']}>
                        <p onClick={ ()=>{ navigate('/') } }>
                            씨네 망가
                        </p>
                    </div>
	            </div>
	            <div className={styles['header-top-right']}>
	                <div className={styles['top-user']} onClick={ ()=>{ navigate('/member/signIn') } } style={ {cursor : 'pointer'} }>
	                    <img className={styles['top-user-img']} src={ login }></img>
	                    <div className={styles['top-user-btn']}>로그인</div>
	                </div>
	                <div className={styles['top-user']} onClick={ ()=>{ navigate('/member/signUp') } } style={ {cursor : 'pointer'} }>
	                    <img className={styles['top-user-img']} src={ join }></img>
	                    <div className={styles['top-user-btn']}>회원가입</div>
	                </div>
	                <div className={styles['top-user']} onClick={ ()=>{ navigate('/member/mypage') } } style={ {cursor : 'pointer'} }>
	                    <img className={styles['top-user-img']} src={ mypage }></img>
	                    <div className={styles['top-user-btn']}>마이페이지</div>
	                </div>
	            </div>
	        </div>
            <Navbar className={styles['wrapper-header-category']} data-bs-theme="light">
                <Container className={styles['category-left']}>
                    <Nav.Link onClick={ ()=>{ navigate('/') } }>Home</Nav.Link>
                    <Nav.Link onClick={ ()=>{ navigate('/store') } }>shop</Nav.Link>
                    <Nav.Link onClick={ ()=>{ navigate('/ticket') } }>ticketing</Nav.Link>
                    <Nav.Link onClick={ ()=>{ navigate('/map') } }>카카오맵</Nav.Link>
                    <Nav.Link onClick={ ()=>{ navigate('/support') } }>고객센터</Nav.Link>
                </Container>
                <div className={styles['category-right']}>
	                <div className={styles['search-box']}>
	                    <input id={styles['searchBox']} type="text" placeholder="영화 검색"></input>
	                </div>
	                <div className={styles['search-btn']}>
	                    <img className={styles['searchBtn']} src={search}></img>
	                </div>
	            </div>
            </Navbar>
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
					<div className={styles['video-div']}>
						<div className={styles['video-title']}>에스파 - 슈퍼노바</div>
						<div className={styles['video-info']}>에스파 윈터 vs 카리나 당신의 선택은???</div>
						<Button className={styles['video-button']} onClick={()=>{ navigate('/')}} variant="light">상세보기 {'>'}</Button>{' '}
					</div>
				</div>
	            <div className={styles['body-chart']}>
	                <div className={styles['chart-header']}>
	                    <div className={styles['chart-title']}><strong>무비 차트</strong></div>
	                    <div className={styles['chart-subtitle1']} onClick={()=>{ }}>현재 상영작</div>
	                    <div className={styles['chart-subtitle2']} onClick={()=>{ }}>상영 예정작</div>
						<div className={styles['chart-button']}>
							<button className={styles['all-button']} onClick={()=>{ navigate('/ticketing')}}>전체보기 {'>'}</button>
						</div>
	                </div>
					<SliderContainer>
						<Slider {...settings}>
						{
							movieChartData.map((movie, i)=> {
								return (
									<MovieChart key={i} i={i} movieData={movieChartData}></MovieChart>
								)
							})
						}
						</Slider>
					</SliderContainer>
	            </div>
	            <div className={styles['body-store']}>
	                <div className={styles['store-header']}>
	                    <div className={styles['store-title']}><strong>스토어</strong></div>
	                    <div className={styles['store-subtitle1']}>푸드</div>
	                    <div className={styles['store-subtitle2']}>굿즈</div>
	                </div>
	                <div className={styles['store-body']}>div 추가해야댐</div>
	            </div>
	            <div className={styles['body-temporary']}>
	                <div className={styles['temporary-header']}>
	                    <div className={styles['temporary-title']}><strong>임시</strong></div>
	                    <div className={styles['temporary-subtitle1']}>하부1</div>
	                    <div className={styles['temporary-subtitle2']}>하부2</div>
	                </div>
	                <div className={styles['temporary-body']}>div 추가해야댐</div>
	            </div>
	        </div>
	        <div className={styles['wrapper-footer']}>@팀명 Corp.</div>
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
                    <button className={styles['chart-button1']} onClick={() => { navigate('/') }}>상세보기</button>
                    <button className={styles['chart-button2']} onClick={() => { navigate('/') }}>예매하기</button>
                </div>
            </div>
            <div className={styles['chart-movie-title']}>
                {props.movieData[props.i].title}
            </div>
            <div className={styles['chart-movie-info']}>
                <div className={styles['chart-movie-preference']}>
                    {props.movieData[props.i].preference}
                </div>
                <div className={styles['chart-movie-reservation']}>
                    {props.movieData[props.i].reservation}
                </div>
            </div>
        </div>
	)
}

export default Main;