import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style/Login.module.css';
import images from './style/images.js'; //이미지 모아뒀습니다.

function Login() {
    return (
        <div className={styles.wrapper}>
          {/* state 백엔드 데이터 가져오기 */}
          <div className={styles.top}>
            광고
          </div>
          <div className={styles.wrapperheader}>
            <div className={styles.wrapperheadertop}>
              <div className={styles.headertopleft}>
                <img className={styles.headertoplogo} src={images.cinema} alt="로고" />
                <div className={styles.headertoptitle}><h1>Red Green Blue</h1></div>
              </div>
              <div className={styles.headertopright}>
                <div className={styles.topuser} onClick={() => window.location.href = 'https://www.cgv.co.kr/'} style={{ cursor: 'pointer' }}>
                  <img className={styles.topuserimg} src={images.login} alt="로그인" />
                  <div className={styles.topuserbtn}>로그인</div>
                </div>
                <div className={styles.topuser} onClick={() => window.location.href = 'https://www.cgv.co.kr/'} style={{ cursor: 'pointer' }}>
                  <img className={styles.topuserimg} src={images.register} alt="회원가입" />
                  <div className={styles.topuserbtn}>회원가입</div>
                </div>
                <div className={styles.topuser} onClick={() => window.location.href = 'https://www.cgv.co.kr/'} style={{ cursor: 'pointer' }}>
                  <img className={styles.topuserimg} src={images.mypage} alt="마이페이지" />
                  <div className={styles.topuserbtn}>마이페이지</div>
                </div>
              </div>
            </div>
            <div className={styles.wrapperheadercategory}>
              <div className={styles.categoryleft}>
                <div className={styles.headercategorybtn}>영화</div>
                <div className={styles.headercategorybtn}>극장</div>
                <div className={styles.headercategorybtn}>예매</div>
                <div className={styles.headercategorybtn}>스토어</div>
                <div className={styles.headercategorybtn} id="service">고객센터</div>
              </div>
              <div className={styles.categoryright}>
                <div className={styles.searchbox}>
                  <input id={styles.searchBox} type="text" placeholder="영화 검색" />
                </div>
                <div className={styles.searchbtn}>
                  <img id={styles.searchBtn} src={images.search} alt="검색" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapperbody}>
            <div className={styles.wrapperloginbox}>
              <div className={styles.loginboxtop}>
                <div className={styles.toptitle}>로그인</div>
                <div className={styles.divideLine}></div>
              </div>
              <div className={styles.loginboxexplanation}>아이디와 비밀번호를 입력하신 후, 로그인 버튼을 클릭해주세요.</div>
              <div className={styles.loginboxbody}>
                <div className={styles.loginboxloginform}>
                  <form action="" method="">
                    <div className={styles.loginform}>
                      <img className={styles.icon} src={images.login} alt="아이콘" />
                      <input className={styles.inputbox} name="id" placeholder="아이디를 입력해주세요." />
                    </div>
                    <div className={styles.loginform}>
                      <img className={styles.icon} src={images.unlock} alt="아이콘" />
                      <input className={styles.inputbox} type="password" name="pw" placeholder="비밀번호를 입력해주세요." />
                    </div>
                    <div className={styles.loginform}>
                      <input className={styles.loginbutton} type="submit" value="로그인" />
                    </div>
                  </form>
                </div>
              </div>
              <div className={styles.loginboxforget}>
                <div className={styles.forgetid}><a href="">아이디찾기 &gt;</a></div>
                <div className={styles.forgetpw}><a href="">비밀번호찾기 &gt;</a></div>
              </div>
            </div>
          </div>
          <div className={styles.wrapperfooter}>@Cinema Corp.</div>
        </div>
      );
}

export default Login;