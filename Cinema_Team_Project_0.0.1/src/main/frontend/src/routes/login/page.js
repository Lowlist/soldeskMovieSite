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
                  <ul className={styles.navbar}>
        <li className={styles.dropdown}>
            <a href="#" class="dropbtn">영화</a>
            <ul className={styles.dropdownContent}>
                <li><a href="#">무비차트</a></li>
                <li><a href="#">아트하우스</a></li>
                <li><a href="#">ICECON</a></li>
            </ul>
        </li>
        <li className={styles.dropdown}>
            <a href="#" class="dropbtn">극장</a>
            <ul className={styles.dropdownContent}>
                <li><a href="#">CGV 극장</a></li>
                <li><a href="#">특별관</a></li>
            </ul>
        </li>
        <li className={styles.dropdown}>
            <a href="#" class="dropbtn">예매</a>
            <ul className={styles.dropdownContent}>
                <li><a href="#">빠른예매</a></li>
                <li><a href="#">상영스케줄</a></li>
                <li><a href="#">English Ticketing</a></li>
                <li><a href="#">English Schedule</a></li>
            </ul>
        </li>
        <li className={styles.dropdown}>
            <a href="#" class="dropbtn">스토어</a>
            <ul className={styles.dropdownContent}>
                <li><a href="#">패키지</a></li>
                <li><a href="#">영화관람권</a></li>
                <li><a href="#">기프트카드</a></li>
                <li><a href="#">콤보</a></li>
                <li><a href="#">팝콘</a></li>
                <li><a href="#">음료</a></li>
                <li><a href="#">스낵</a></li>
                <li><a href="#">플레이존</a></li>
                <li><a href="#">씨네샵</a></li>
            </ul>
        </li>
        <li className={styles.dropdown}>
            <a href="#" className="dropbtn">이벤트</a>
            <ul className={styles.dropdownContent}>
                <li><a href="#">SPECIAL</a></li>
                <li><a href="#">영화/예매</a></li>
                <li><a href="#">멤버십/CLUB</a></li>
                <li><a href="#">CGV 극장별</a></li>
                <li><a href="#">제휴할인</a></li>
                <li><a href="#">당첨자 발표</a></li>
                <li><a href="#">종료된 이벤트</a></li>
            </ul>
        </li>
        <li className={styles.dropdown}>
            <a href="#" class="dropbtn">혜택</a>
            <ul className={styles.dropdownContent}>
                <li><a href="#">CGV 할인정보</a></li>
                <li><a href="#">CLUB 서비스</a></li>
                <li><a href="#">VIP 라운지</a></li>
            </ul>
        </li>
    </ul>
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
            <div className={styles.toplist}></div>
                 
          <div className={styles.container}>
            <div className={styles.info}>
              <div className={styles.infoSpace}></div>
              <div className={styles.infoTop}>
                <div className={styles.infoTopLeft}>
                  <img className={styles.mypageImg} src={images.mypage} alt="프로피르" />
                </div>
                <div className={styles.infoTopRig}>
                  <div className={styles.infoTopRigTop}>
                    이름 닉네임 
                  </div>
                  <div className={styles.infoTopRigBot}>
                    고객님은 등급 입니다.
                  </div>
                </div>
              </div>
              <div className={styles.infoBot}>
                <div className={styles.infoBotLeft}>
                  쿠폰 내역
                </div>
                <div className={styles.infoBotRig}>
                  예매 내역
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.containerleft}>
                <ul className={styles.containermenu}>
                  <li className={styles.li}>
                    나의 예매내역
                    <ul>
                      <li>신용카드 영수증 출력</li>
                    </ul>
                  </li>
                  <li className={styles.li}>관람권/할인쿠폰 관리
                    <ul>
                      <li>Cinema 영화관람권</li>
                      <li>Cinema 할인쿠폰</li>
                    </ul>
                  </li>
                  <li className={styles.li}>기프트샵
                    <ul>
                      <li>내 기프트콘</li>
                      <li>결제내역</li>
                    </ul>
                  </li>
                  <li className={styles.li}>회원정보
                    <ul>
                      <li>개인정보 변경</li>
                      <li>간편 로그인 설정</li>
                      <li>회원탈퇴</li>
                    </ul>
                  </li>
                  <li className={styles.li}>프로필 관리
                    <ul>
                      <li>나의정보관리</li>
                    </ul>
                  </li>
                  <li className={styles.li}>문의 내역
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