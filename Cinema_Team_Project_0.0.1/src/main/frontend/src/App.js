import axios from 'axios';
import { useEffect , Suspense , useState } from 'react';
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import './App.css';
import Main from './routes/main/Main.js';
import Shop from './routes/shop/Shop.js';
import Ticket from './routes/ticketing/ticket/Ticketing.js';

// 내부 스테이트 들은 알아서 만들고 알아서 정리하세요!
// 공용스테이트같은 경우에는 redux사용해서 정리할것!
// 폴더같은 경우엔 routes/.../... 이런식으로 구성할것!

// 디자인 -> HTML/CSS -> 기능 -> 데이터바인딩
// 자바에서 걍 json정보를 스트링으로 전달해서 파싱하는방법 << 권혁영 1픽
// 키값만 가져와서 처리후 파싱하는방법 (Axios) << 두번사용함

function App() {

  // let navigate = useNavigate();
  // useEffect(() => {
  //   axios.get('/api/hello')
  //   .then(response => setHello(response.data))
  //   .catch(error => console.log(error))
  // }, []);

  return (
    <div className="App">

      {/* Suspense 의 기능은 페이지가 불러오는 도중일때 fallback 에 등록한 Div 및 컴포넌트를 보여줌 */}
      <Suspense fallback={<div>로딩중임</div>}>
          <Routes>
            <Route path="/" element={ <Main></Main> }/>

            <Route path="/ticket" element={<> <Ticket></Ticket> <Outlet></Outlet> </>}>
              <Route path="seat" element={<>형주몸안좋음</>}></Route>
            </Route>

            <Route path="/order" element={<>결제창</>}></Route>
            <Route path="/basket" element={<>장바구니</>}></Route>

            <Route path="/store" element={<> <Shop></Shop> <Outlet></Outlet> </>}>
              <Route path="package" element={<> / 패키지임 </>}></Route>
              <Route path="food" element={<> / 음식임 </>}></Route>
              <Route path="giftTicket" element={<> / 상품권임 </>}></Route>
              <Route path="search" element={<> 검색임 </>}></Route>
            </Route>

            <Route path="/movie" element={<>혁영이형이야~ <Outlet></Outlet> </>}>
              <Route path="main" element={<>/ 무비 메인</>}></Route>
              <Route path="info" element={<>/ 영화 상세정보 <Outlet></Outlet> </>}>
                <Route path="schedule" element={<>/ 해당 영화에 대한 상영관 스케줄</>}></Route>
                <Route path="review" element={<>/ 해당 영화에 대한 리뷰 게시판</>}></Route>
              </Route>
              <Route path="theater" element={<>/ 상영관 정보 </>}></Route>
              <Route path="search" element={<>/ 영화 검색정보 URL </>}></Route>
            </Route>

            <Route path="/member" element={<> <Outlet></Outlet> </>}>
              <Route path="signUp" element={<>회원가입</>}></Route>
              <Route path="signIn" element={<>로그인</>}></Route>
              <Route path="myPage" element={<>마이페이지임</>}></Route>
              <Route path="find" element={<>아이디/비밀번호 찾기</>}></Route>
              <Route path="findId" element={<>아이디 찾기</>}></Route>
              <Route path="findPw" element={<>패스워드 찾기 <Outlet></Outlet> </>}>
                <Route path="findPwResult" element={<>/ 조건 통과해서 결과 보내주면됨</>}></Route>
              </Route>
            </Route>

            <Route path="/support" element={<>고객센터 <Outlet></Outlet> </> }>
              <Route path="notice" element={<>/ 공지사항</>}></Route>
              <Route path="question" element={<>질문게시판 <Outlet></Outlet></>}>
                <Route path="realtime" element={<>/ 실시간 문의</>}></Route>
              </Route>
            </Route>

            <Route path="/gps" element={<Outlet></Outlet>}>
              <Route path="map" element={<>맵임</>}></Route>
            </Route>

            {/* 어드민 nested는 추가 할 때 작성예정 */}
            <Route path="/admin" element={<>관리자임</>}></Route>

            <Route path="*" element={<div>404임</div>}></Route>
          </Routes>
      </Suspense>

    </div>
  );
}

export default App;