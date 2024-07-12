import React, { useState, useEffect } from 'react';
import { Button, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import styles from './style/page.module.css';
import images from './style/images.js'; //이미지 모아뒀습니다.
import 'bootstrap/dist/css/bootstrap.min.css';


function Page() {
  const [activeItem, setActiveItem] = useState(null);
    
  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
       <div className={styles.whole}>
        <div className={styles.ad}>배너</div>
            <div className={styles.top}>
              <div className={styles.wrapperHeader}>
                <div className={styles.headerTop}>
                  <div className={styles.headerTopLeft}>
                      <img className={styles.headerTopLogo} src={images.cinema} alt="로고" />
                      <div className={styles.headerTopTitle}><h1>Red Green Blue</h1></div>
                  </div>
                  <div className={styles.headerTopRight}>
                      <div className={styles.topUser} onClick={() => window.location.href = 'https://www.cgv.co.kr/'} style={{ cursor: 'pointer' }}>
                        <img className={styles.topUserImg} src={images.login} alt="로그인" />
                       <div className={styles.topUserBtn}>로그인</div>
                      </div>
                      <div className={styles.topUser} onClick={() => window.location.href = 'https://www.cgv.co.kr/'} style={{ cursor: 'pointer' }}>
                        <img className={styles.topUserImg} src={images.register} alt="회원가입" />
                        <div className={styles.topUserBtn}>회원가입</div>
                      </div>
                      <div className={styles.topUser} onClick={() => window.location.href = 'https://www.cgv.co.kr/'} style={{ cursor: 'pointer' }}>
                        <img className={styles.topUserImg} src={images.mypage} alt="마이페이지" />
                        <div className={styles.topUserBtn}>마이페이지</div>
                  </div>
                </div>
                </div>
                <div className={styles.wrapperHeaderCategory}>
                  <div className={styles.categoryLeft}>
                    <div className={styles.headerCategoryBtn}>
                      영화
                      <div className={styles.dropdownContent}>
                          <a href="#">무비차트</a>
                          <a href="#">아트 하우스</a>
                          <a href="#">패키지</a>
                      </div>
                    </div>
                    <div className={styles.headerCategoryBtn}>극장</div>
                    <div className={styles.headerCategoryBtn}>예매</div>
                    <div className={styles.headerCategoryBtn}>스토어</div>
                    <div className={styles.headerCategoryBtn} id="service">고객센터</div>
                  </div>
                  <div className={styles.categoryRight}>
                    <div className={styles.searchBox}>
                      <input id={styles.searchBox} type="text" placeholder="영화 검색" />
                    </div>
                    <div className={styles.searchBtn}>
                      <img id={styles.searchBtn} src={images.search} alt="검색" />
                    </div>
                  </div>
                </div>
              </div>
            </div>  
            <ul className={styles.menu}>
              <li>
                <a href="#">Dropdown</a>
                <ul>
                  <li><a href="#">영화</a></li>
                  <li><a href="#">극장</a></li>
                  <li><a href="#">예매</a></li>
                  <li><a href="#">스토어</a></li>
                </ul>
              </li>
            </ul>
            <div className={styles.toplist}></div>
                 
          <div className={styles.container}>
            <div className={styles.info}>
              <Col xs={6} md={4}>
                <Image src={images.mypage}/>
              </Col>
            </div>
            <div className={styles.content}>
              <div className={styles.containerleft}>
                <ul className={styles.containermenu}>
                  <li className={activeItem === 'item' ? 'active' : ''} onClick={() => handleClick('myBooking')}>
                    나의 예매내역
                    <ul>
                      <li>신용카드 영수증 출력</li>
                    </ul>
                  </li>
                  <li>관람권/할인쿠폰 관리
                    <ul>
                      <li>Cinema 영화관람권</li>
                      <li>Cinema 할인쿠폰</li>
                    </ul>
                  </li>
                  <li>기프트샵
                    <ul>
                      <li>내 기프트콘</li>
                      <li>결제내역</li>
                    </ul>
                  </li>
                  <li>회원정보
                    <ul>
                      <li>개인정보 변경</li>
                      <li>간편 로그인 설정</li>
                      <li>회원탈퇴</li>
                    </ul>
                  </li>
                  <li>프로필 관리
                    <ul>
                      <li>나의정보관리</li>
                    </ul>
                  </li>
                  <li>문의 내역
                    <ul>
                      <li>1대1문의</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={styles.containerinfo}></div>
            </div>
          </div>
        </div>
    
  );
}

export default Page;