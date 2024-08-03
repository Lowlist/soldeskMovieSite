import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import styles from './style/SignUp.module.css';
import { useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import cinema from '../../image/cinema.jpg';

function SignUp() {
    const [id, setId] = useState('');
    const [pw1, setPw1] = useState('');
    const [pw2, setPw2] = useState('');
    const [userName, setUserName] = useState('');
    const [nickName, setNickName] = useState('');
    const [yy, setYy] = useState('');
    const [mm, setMm] = useState('월');
    const [dd, setDd] = useState('');
    const [gender, setGender] = useState('성별');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState(Array(8).fill(''));
    const [errorClasses, setErrorClasses] = useState(Array(8).fill(''));
    // const [role, setRole] = useState('');
    // const [profile, setProfile] = useState('');
    const [addr, setAddr] = useState('');
    const [Image, setImage] = useState(null)
    const [InputAddressValue, setInputAddressValue] = useState('');

    const navigate = useNavigate();
    
    useEffect(() => {
        const newErrorClasses = errors.map(error => error ? styles.error : '');
        setErrorClasses(newErrorClasses); 
    }, [errors]);
    
    // //사진업로드
    // const inputRef = useRef(null);
    // const handleFileClick = () => {
    //     inputRef.current.click(); //input 엘리먼트 클릭 => 인풋 실행
    // }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file){
    //         uploadFile(file); // 파일을 서버에 업로드
    //     }
    //   };

    // const uploadFile= async (file) => {
    //     try {
    //         const formData = new FormData();
    //         formData.append('file', file); // 파일을 FormData에 추가
    //         console.log('유저 이미지 교체 중');
    //         const response = await axios.post('/member/signUp', formData, {
    //             header: {
    //                 'Content-Type': 'multipart/form-data', //필수
    //             },
    //         })

    //     } catch (error){
    //         console.error('Error uploading file:', error);
    //     }
    // }


    const onCompletePost = data => {
        setInputAddressValue(data.address);
      }; // onCompletePost 함수

    const checkId = () => {
        if (id === '') {
            setErrors(prev => { prev[0] = '필수 정보입니다.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else if (id.length < 6 || id.length > 20) {
            setErrors(prev => { prev[0] = '6~20자 사이의 ID를 사용하세요.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else {
            setErrors(prev => { prev[0] = ''; return [...prev]; });
            return id; // 검증 성공 시 id 리턴
        }
    };
    
    const checkPw = () => {
        if (pw1 === '') {
            setErrors(prev => { prev[1] = '필수 정보입니다.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else if (pw1.length < 8 || pw1.length > 20) {
            setErrors(prev => { prev[1] = '8~20자 사이의 비밀번호를 사용하세요.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else {
            setErrors(prev => { prev[1] = ''; return [...prev]; });
            return pw1; // 검증 성공 시 pw1 리턴
        }
    };
    
    const comparePw = () => {
        if (pw1 !== pw2) {
            setErrors(prev => { prev[2] = '비밀번호가 일치하지 않습니다.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else {
            setErrors(prev => { prev[2] = ''; return [...prev]; });
            return pw1; // 검증 성공 시 pw1 리턴
        }
    };
    
    const checkName = () => {
        if (userName === '') {
            setErrors(prev => { prev[3] = '필수 정보입니다.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else if (userName.length < 2 || userName.length > 50) {
            setErrors(prev => { prev[3] = '2~50자 사이의 이름을 사용하세요.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else {
            setErrors(prev => { prev[3] = ''; return [...prev]; });
            return userName; // 검증 성공 시 userName 리턴
        }
    };

    const isBirthCompleted = () => {
        const yearPattern = /^[0-9]{4}$/;
        const monthPattern = /^[0-9]{1,2}$/; // 월은 1-12 사이의 숫자
        const dayPattern = /^[0-9]{1,2}$/; // 일자는 1-31 사이의 숫자
    
        // 태어난 년도 4자리 확인
        if (!yearPattern.test(yy)) {
            setErrors(prev => { prev[4] = '태어난 년도 4자리를 정확하게 입력하세요.'; return [...prev]; });
            return null; // 검증 실패 시 종료
        }
    
        // 태어난 월 확인
        if (mm === '월' || !monthPattern.test(mm) || Number(mm) < 1 || Number(mm) > 12) {
            setErrors(prev => { prev[4] = '태어난 월을 정확하게 선택하세요.'; return [...prev]; });
            return null; // 검증 실패 시 종료
        }
    
        // 태어난 일자 확인
        if (!dayPattern.test(dd) || Number(dd) < 1 || Number(dd) > 31) {
            setErrors(prev => { prev[4] = '태어난 일(날짜) 2자리를 정확하게 입력하세요.'; return [...prev]; });
            return null; // 검증 실패 시 종료
        }
    
        // 생년월일이 올바른지 확인
        const birthDate = new Date(`${yy}-${mm}-${dd}`);
        if (birthDate.getFullYear() !== Number(yy) || (birthDate.getMonth() + 1) !== Number(mm) || birthDate.getDate() !== Number(dd)) {
            setErrors(prev => { prev[4] = '생년월일을 다시 확인해주세요.'; return [...prev]; });
            return null; // 검증 실패 시 종료
        }
    
        // 나이 확인
        const currentYear = new Date().getFullYear();
        if (Number(yy) < 1920) {
            setErrors(prev => { prev[4] = '정말이세요?'; return [...prev]; });
            return null; // 검증 실패 시 종료
        } else if (Number(yy) > currentYear) {
            setErrors(prev => { prev[4] = '미래에서 오셨군요. ^^'; return [...prev]; });
            return null; // 검증 실패 시 종료
        } else if (Number(yy) > 2005) {
            setErrors(prev => { prev[4] = '만 14세 미만의 어린이는 보호자 동의가 필요합니다.'; return [...prev]; });
            return null; // 검증 실패 시 종료
        }
    
        // 검증 성공
        setErrors(prev => { prev[4] = ''; return [...prev]; });
        return `${yy}-${mm}-${dd}`; // 검증 성공 시 생년월일 리턴
    };
    
    
    const isEmailCorrect = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setErrors(prev => { prev[5] = '유효한 이메일 주소를 입력하세요.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else {
            setErrors(prev => { prev[5] = ''; return [...prev]; });
            return email; // 검증 성공 시 email 리턴
        }
    };
    
    const checkPhoneNum = () => {
        const phonePattern = /^\d{10,11}$/;
        if (!phonePattern.test(mobile)) {
            setErrors(prev => { prev[6] = '전화번호는 10~11자리 숫자여야 합니다.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else {
            setErrors(prev => { prev[6] = ''; return [...prev]; });
            return mobile; // 검증 성공 시 mobile 리턴
        }
    };
    
    const checkNickName = () => {
        if (nickName === '') {
            setErrors(prev => { prev[7] = '필수 정보입니다.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else if (nickName.length < 1 || nickName.length > 20) {
            setErrors(prev => { prev[7] = '1~20자 사이의 닉네임을 사용하세요.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else if (!/^[a-zA-Z0-9가-힣]+$/.test(nickName)) {
            setErrors(prev => { prev[7] = '특수문자는 사용하지 마세요.'; return [...prev]; });
            return null; // 검증 실패 시 null 리턴
        } else {
            setErrors(prev => { prev[7] = ''; return [...prev]; });
            return nickName; // 검증 성공 시 nickName 리턴
        }
    };

    const handleSubmit = () => {
        const idValue = checkId();
        const pwValue = checkPw();
        const pwMatched = comparePw();
        const nameValue = checkName();
        const birthValue = isBirthCompleted();
        const emailValue = isEmailCorrect();
        const phoneValue = checkPhoneNum();
        const nickNameValue = checkNickName();
    
        // 모든 검증이 통과한 경우
        if (idValue && pwValue && pwMatched && nameValue && birthValue && emailValue && phoneValue && nickNameValue ) {
            const user = {
                id: idValue,
                password: pwValue,
                userName: nameValue,
                nickName: nickNameValue,
                birthDate: birthValue,
                gender,
                email: emailValue,
                mobile: phoneValue,
                profile: '사진',
                address: 'why',
            };
            // JSON 형태로 서버에 POST 요청 전송
            axios.post('/member/signUp', user)
                    .then((response) => {console.log(response);
                        if (response.status===200){
                            navigate('/member/signIn');
                        }
                    })
                    .catch((error) => {
                        console.error('에러 발생:', error);
                    });
        } else {
            console.error('Validation failed');
        }
    };

    return (
        <>
        <div className={styles.wrapperheader}>
            <div className={styles.wrapperheadertop}>
              <div className={styles.headertopleft}>
                <img className={styles.headertoplogo} src={cinema} alt="로고" 
                onClick={()=>{
                    navigate('/');
                }}/>
                <div className={styles.headertoptitle}><h1>Red Green Blue</h1></div>
              </div>
            </div>
        </div>
        <h3></h3>
            <div className={styles.signupContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div>
                            <h3 className="join_title">
                                <label htmlFor="id">아이디</label>
                            </h3>
                            
                            <span className={styles.boxIntId}>
                                <input 
                                    type="text" 
                                    id="id" 
                                    className={styles.intId} 
                                    maxLength="20" 
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    onBlur={checkId}
                                /><button type="button" id={styles.idCheck} >
                                <span>아이디 확인</span>
                            </button>
                                <span className={styles.stepUrl}></span>
                            </span> 
                            <span className={styles.errorNextBox}>{errors[0]}</span>
                        </div>

                        <div>
                            <h3 className="join_title">
                                <label htmlFor="pswd1">비밀번호</label>
                            </h3>
                            <span className={styles.boxIntPass}>
                                <input 
                                    type="password" 
                                    id="pswd1" 
                                    className={styles.int} 
                                    maxLength="20"
                                    value={pw1}
                                    onChange={(e) => setPw1(e.target.value)}
                                    onBlur={checkPw}
                                />
                            </span>
                            <span className={styles.errorNextBox}>{errors[1]}</span>
                        </div>

                        <div>
                            <h3 className="join_title">
                                <label htmlFor="pswd2">비밀번호 재확인</label>
                            </h3>
                            <span className={styles.boxIntPassCheck}>
                                <input 
                                    type="password" 
                                    id="pswd2" 
                                    className={styles.int} 
                                    maxLength="20"
                                    value={pw2}
                                    onChange={(e) => setPw2(e.target.value)}
                                    onBlur={comparePw}
                                />
                            </span>
                            <span className={styles.errorNextBox}>{errors[2]}</span>
                        </div>

                        <div>
                            <h3 className="join_title">
                                <label htmlFor="profile">프로필</label>
                            </h3>
                            <span className={styles.errorNextBox}>{errors[9]}</span>
                        
                        </div>
                        <input
                            type="file"
                            className={styles.boxProfileCheck}>

                        </input>
                        <div>
                            <h3 className="join_title">
                                <label htmlFor="name">이름</label>
                            </h3>
                            
                            <span className={styles.boxIntName}>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className={styles.int} 
                                    maxLength="20"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    onBlur={checkName}
                                />
                            </span>
                            
                            <span className={styles.errorNextBox}>{errors[3]}</span>
                        </div>
                        
                        <div>
                            <h3 className="join_title">
                                <label htmlFor="nickName">닉네임</label>
                            </h3>
                            
                            <span className={styles.boxIntName}>
                                <input
                                    type="text"
                                    id="nickName"
                                    className={styles.intId}
                                    maxLength="20"
                                    value={nickName}
                                    onChange={(e) => setNickName(e.target.value)}
                                    onBlur={checkNickName} // 유효성 검사 함수 추가
                                />
                            </span><button type="button" id={styles.nickNameCheck} >
                                <span>닉네임 확인</span>
                            </button>
                            
                            <span className={styles.errorNextBox}>{errors[7]}</span>
                        </div>

                        <div>
                            <h3 className="join_title">
                                <label htmlFor="yy">생년월일</label>
                            </h3>
                            <div className={styles.birWrap}>
                                <div className={styles.birYy}>
                                    <span className={styles.box}>
                                        <input
                                            type="text"
                                            id="yy"
                                            className={styles.int}
                                            maxLength="4"
                                            placeholder="년(4자)"
                                            value={yy}
                                            onChange={(e) => setYy(e.target.value)}
                                            onBlur={isBirthCompleted}
                                        />
                                    </span>
                                </div>

                                <div className={styles.birMm}>
                                    <span className={styles.box}>
                                        <select 
                                            id="mm" 
                                            className={styles.sel}
                                            value={mm}
                                            onChange={(e) => setMm(e.target.value)}
                                            onBlur={isBirthCompleted}
                                        >
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

                                <div className={styles.birDd}>
                                    <span className={styles.box}>
                                        <input
                                            type="text"
                                            id="dd"
                                            className={styles.int}
                                            maxLength="2"
                                            placeholder="일"
                                            value={dd}
                                            onChange={(e) => setDd(e.target.value)}
                                            onBlur={isBirthCompleted}
                                        />
                                    </span>
                                </div>
                            </div>
                            <span className={styles.errorNextBox}>{errors[4]}</span>
                        </div>

                        <div>
                            <h3 className="join_title">
                                <label htmlFor="gender">성별</label>
                            </h3>
                            <span className={styles.boxGenderCode}>
                                <select 
                                    id="gender" 
                                    className={styles.sel}
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                >
                                    <option>성별</option>
                                    <option value="M">남자</option>
                                    <option value="F">여자</option>
                                </select>
                            </span>
                        </div>

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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={isEmailCorrect}
                                />
                            </span>
                            <span className={styles.errorNextBox}>{errors[5]}</span>
                        </div>

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
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    onBlur={checkPhoneNum}
                                />
                            </span>
                            <span className={styles.errorNextBox}>{errors[6]}</span>
                        </div>

                        <div>
                            <h3 className="join_title">
                                <label htmlFor="address">주소</label>
                            </h3>
                            <button type="button" id={styles.addressCheck} >
                                <span>주소 확인</span>
                            </button>
                            {/* <span className={styles.address}>
                                <DaumPostcode
                                    onComplete={onCompletePost}
                                ></DaumPostcode>
                                {InputAddressValue}
                            </span> */}
                            <span className={styles.errorNextBox}></span>
                        </div>
                        

                        <div className={styles.btnArea}>
                            <button type="button" id={styles.btnJoin} onClick={handleSubmit}>
                                <span>가입하기</span>
                            </button>
                        </div>
                    </div>
                    <div className={styles.bottomArea}>

                    </div>
                </div>
                </div>
        </>
    );
}

export default SignUp;