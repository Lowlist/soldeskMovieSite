import React, { useState } from 'react';
import styles from './style/register.module.css';
import images from './style/images.js';

function SignupForm() {
  const [id, setId] = useState('');
  const [pw1, setPw1] = useState('');
  const [pw2, setPw2] = useState('');
  const [userName, setUserName] = useState('');
  const [yy, setYy] = useState('');
  const [mm, setMm] = useState('월');
  const [dd, setDd] = useState('');
  const [gender, setGender] = useState('성별');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState(Array(8).fill(''));

  const checkId = () => {
    const idPattern = /[a-zA-Z0-9_-]{5,20}/;
    if (id === '') {
      setErrors(prev => { prev[0] = '필수 정보입니다.'; return [...prev]; });
    } else if (!idPattern.test(id)) {
      setErrors(prev => { prev[0] = '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.'; return [...prev]; });
    } else {
      setErrors(prev => { prev[0] = '멋진 아이디네요!'; return [...prev]; });
    }
  };

  const checkPw = () => {
    const pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,16}/;
    if (pw1 === '') {
      setErrors(prev => { prev[1] = '필수 정보입니다.'; return [...prev]; });
    } else if (!pwPattern.test(pw1)) {
      setErrors(prev => { prev[1] = '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'; return [...prev]; });
    } else {
      setErrors(prev => { prev[1] = '안전'; return [...prev]; });
    }
  };

  const comparePw = () => {
    if (pw2 === pw1 && pw2 !== '') {
      setErrors(prev => { prev[2] = ''; return [...prev]; });
    } else if (pw2 !== pw1) {
      setErrors(prev => { prev[2] = '비밀번호가 일치하지 않습니다.'; return [...prev]; });
    } 

    if (pw2 === '') {
      setErrors(prev => { prev[2] = '필수 정보입니다.'; return [...prev]; });
    }
  };

  const checkName = () => {
    const namePattern = /[a-zA-Z가-힣]/;
    if (userName === '') {
      setErrors(prev => { prev[3] = '필수 정보입니다.'; return [...prev]; });
    } else if (!namePattern.test(userName) || userName.indexOf(' ') > -1) {
      setErrors(prev => { prev[3] = '한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)'; return [...prev]; });
    } else {
      setErrors(prev => { prev[3] = ''; return [...prev]; });
    }
  };

  const isBirthCompleted = () => {
    const yearPattern = /[0-9]{4}/;

    if (!yearPattern.test(yy)) {
      setErrors(prev => { prev[4] = '태어난 년도 4자리를 정확하게 입력하세요.'; return [...prev]; });
    } else {
      isMonthSelected();
    }

    function isMonthSelected() {
      if (mm === '월') {
        setErrors(prev => { prev[4] = '태어난 월을 선택하세요.'; return [...prev]; });
      } else {
        isDateCompleted();
      }
    }

    function isDateCompleted() {
      if (dd === '') {
        setErrors(prev => { prev[4] = '태어난 일(날짜) 2자리를 정확하게 입력하세요.'; return [...prev]; });
      } else {
        isBirthRight();
      }
    }
  };

  const isBirthRight = () => {
    const datePattern = /\d{1,2}/;
    if (!datePattern.test(dd) || Number(dd) < 1 || Number(dd) > 31) {
      setErrors(prev => { prev[4] = '생년월일을 다시 확인해주세요.'; return [...prev]; });
    } else {
      checkAge();
    }
  };

  const checkAge = () => {
    if (Number(yy) < 1920) {
      setErrors(prev => { prev[4] = '정말이세요?'; return [...prev]; });
    } else if (Number(yy) > 2020) {
      setErrors(prev => { prev[4] = '미래에서 오셨군요. ^^'; return [...prev]; });
    } else if (Number(yy) > 2005) {
      setErrors(prev => { prev[4] = '만 14세 미만의 어린이는 보호자 동의가 필요합니다.'; return [...prev]; });
    } else {
      setErrors(prev => { prev[4] = ''; return [...prev]; });
    }
  };

  const isEmailCorrect = () => {
    const emailPattern = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/;
    if (email === '') {
      setErrors(prev => { prev[6] = ''; return [...prev]; });
    } else if (!emailPattern.test(email)) {
      setErrors(prev => { prev[6] = '이메일 형식이 맞지 않습니다.'; return [...prev]; });
    } else {
      setErrors(prev => { prev[6] = ''; return [...prev]; });
    }
  };

  const checkPhoneNum = () => {
    const isPhoneNum = /([01]{2})([01679]{1})([0-9]{3,4})([0-9]{4})/;
    if (mobile === '') {
      setErrors(prev => { prev[7] = '필수 정보입니다.'; return [...prev]; });
    } else if (!isPhoneNum.test(mobile)) {
      setErrors(prev => { prev[7] = '형식에 맞지 않는 번호입니다.'; return [...prev]; });
    } else {
      setErrors(prev => { prev[7] = ''; return [...prev]; });
    }
  };

  return (
    <div>
      {/* Header */}
      <div className={styles.header}>
        <a
          href="https://nid.naver.com/user2/V2Join.nhn?m=agree#agreeBottom"
          target="_blank"
          title="네이버 회원가입 페이지 보러가기"
        >
          <img src={images.logo} id={styles.logo} alt="cinema logo" />
        </a>
      </div>

      {/* Wrapper */}
      <div className={styles.wrapper}>
        {/* Content */}
        <div className={styles.content}>
          {/* ID */}
          <div>
            <h3 className="join_title">
              <label htmlFor="id">아이디</label>
            </h3>
            <span className={styles.boxIntId}>
              <input type="text" id="id" className={styles.int} maxLength="20" />
              <span className={styles.stepUrl}>@naver.com</span>
            </span>
            <span className={styles.errorNextBox}></span>
          </div>

          {/* PW1 */}
          <div>
            <h3 className="join_title">
              <label htmlFor="pswd1">비밀번호</label>
            </h3>
            <span className={styles.boxIntPass}>
              <input type="text" id="pswd1" className={styles.int} maxLength="20" />
              <span className={styles.alertTxt}>사용불가</span>
              <img src="m_icon_pass.png" id="pswd1_img1" className={styles.pswdImg} alt="Password icon" />
            </span>
            <span className={styles.errorNextBox}></span>
          </div>

          {/* PW2 */}
          <div>
            <h3 className="join_title">
              <label htmlFor="pswd2">비밀번호 재확인</label>
            </h3>
            <span className={styles.boxIntPassCheck}>
              <input type="text" id="pswd2" className={styles.int} maxLength="20" />
              <img
                src="m_icon_check_disable.png"
                id="pswd2_img1"
                className={styles.pswdImg}
                alt="Check icon"
              />
            </span>
            <span className={styles.errorNextBox}></span>
          </div>

          {/* NAME */}
          <div>
            <h3 className="join_title">
              <label htmlFor="name">이름</label>
            </h3>
            <span className={styles.boxIntName}>
              <input type="text" id="name" className={styles.int} maxLength="20" />
            </span>
            <span className={styles.errorNextBox}></span>
          </div>

          {/* BIRTH */}
          <div>
            <h3 className="join_title">
              <label htmlFor="yy">생년월일</label>
            </h3>
            <div className={styles.birWrap}>
              {/* BIRTH_YY */}
              <div className={styles.birYy}>
                <span className={styles.box}>
                  <input
                    type="text"
                    id="yy"
                    className={styles.int}
                    maxLength="4"
                    placeholder="년(4자)"
                  />
                </span>
              </div>

              {/* BIRTH_MM */}
              <div className={styles.birMm}>
                <span className={styles.box}>
                  <select id="mm" className={styles.sel}>
                    <option>월</option>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </span>
              </div>

              {/* BIRTH_DD */}
              <div className={styles.birDd}>
                <span className={styles.box}>
                  <input
                    type="text"
                    id="dd"
                    className={styles.int}
                    maxLength="2"
                    placeholder="일"
                  />
                </span>
              </div>
            </div>
            <span className={styles.errorNextBox}></span>
          </div>

          {/* GENDER */}
          <div>
            <h3 className="join_title">
              <label htmlFor="gender">성별</label>
            </h3>
            <span className={styles.boxGenderCode}>
              <select id="gender" className={styles.sel}>
                <option>성별</option>
                <option value="M">남자</option>
                <option value="F">여자</option>
              </select>
            </span>
            <span className={styles.errorNextBox}>필수 정보입니다.</span>
          </div>

          {/* EMAIL */}
          <div>
            <h3 className="join_title">
              <label htmlFor="email">
                본인확인 이메일<span className="optional">(선택)</span>
              </label>
            </h3>
            <span className={styles.boxIntEmail}>
              <input
                type="text"
                id="email"
                className={styles.int}
                maxLength="100"
                placeholder="선택입력"
              />
            </span>
            <span className={styles.errorNextBox}>이메일 주소를 다시 확인해주세요.</span>
          </div>

          {/* MOBILE */}
          <div>
            <h3 className="join_title">
              <label htmlFor="phoneNo">휴대전화</label>
            </h3>
            <span className={styles.boxIntMobile}>
              <input
                type="tel"
                id="mobile"
                className={styles.int}
                maxLength="16"
                placeholder="전화번호 입력"
              />
            </span>
            <span className={styles.errorNextBox}></span>
          </div>

          {/* JOIN BTN */}
          <div className={styles.btnArea}>
            <button type="button" id={styles.btnJoin}>
              <span>가입하기</span>
            </button>
          </div>
        </div>
        {/* content */}
      </div>
      {/* wrapper */}
    </div>
  );
}

export default SignupForm;