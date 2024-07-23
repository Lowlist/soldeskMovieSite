import { Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './routes/main/Main.js';
import DrinkFood from './routes/shop/DrinkFood.js';
import GiftTicket from './routes/shop/GiftTicket.js';
import GoodsDetail from './routes/shop/GoodsDetail.js';
import PackageGoods from './routes/shop/PackageGoods.js';
import Shop from './routes/shop/Shop.js';
import Ticket from './routes/ticketing/ticket/Ticketing.js';
import Seat from './routes/ticketing/seat/SeatSelection.js';
import MovieList from './routes/movieInfo/MovieList.js';
import Movie from './routes/movieInfo/Movie.js';
import Notice from './routes/support/Notice.js';
import Support from './routes/support/Support.js';
import RealtimeQuestion from './routes/support/RealtimeQuestion.js';
import Question from './routes/support/Question.js';
import NoticeDetail from './routes/support/NoticeDetail.js';
import QuestionDetail from './routes/support/QuestionDetail.js';
import Login from './routes/login/login.js';
import Page from './routes/login/page.js';
import Re from './routes/login/register.js';

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

            <Route path="/ticket" element={ <Ticket/> }></Route>
            <Route path="/seat" element={ <Seat/> }></Route>

            <Route path="/order" element={<>결제창</>}></Route>
            <Route path="/basket" element={<>장바구니</>}></Route>

            <Route path="/store" element={<Shop/>}>
              <Route path="package" element={<PackageGoods/>}></Route>
              <Route path="food" element={<DrinkFood/>}></Route>
              <Route path="giftTicket" element={<GiftTicket/>}></Route>
              <Route path=':id' element={<GoodsDetail/>}></Route>
              <Route path="search" element={<> 검색임 </>}></Route>
            </Route>

            <Route path="/movie" element={<Outlet/>}>
              <Route path="main" element={<MovieList/>}></Route>
              <Route path="info" element={<Movie/>}>
                <Route path="schedule" element={<>/ 해당 영화에 대한 상영관 스케줄</>}></Route>
                <Route path="review" element={<>/ 해당 영화에 대한 리뷰 게시판</>}></Route>
              </Route>
              <Route path="theater" element={<>/ 상영관 정보 </>}></Route>
              <Route path="search" element={<>/ 영화 검색정보 URL </>}></Route>
            </Route>

            <Route path="/member" element={<> <Outlet></Outlet> </>}>
              <Route path="signUp" element={<Re/>}></Route>
              <Route path="signIn" element={<Login/>}></Route>
              <Route path="myPage" element={<Page/>}></Route>
              {/* 여기 아래부분은 ver2 에서 해도 됨 */}
              <Route path="find" element={<>아이디/비밀번호 찾기</>}></Route>
              <Route path="findId" element={<>아이디 찾기</>}></Route>
              <Route path="findPw" element={<>패스워드 찾기 <Outlet></Outlet> </>}>
                <Route path="findPwResult" element={<>/ 조건 통과해서 결과 보내주면됨</>}></Route>
              </Route>
            </Route>
            
            <Route path='/support' element={<Support />}>
              <Route index element={<div>고객센터 기본 페이지</div>} />
              <Route path='notice' element={<><Outlet /></>}>
                <Route index element={<Notice />} />
                <Route path=':id' element={<NoticeDetail />} />
              </Route>
              <Route path='question' element={<><Outlet /></>}>
                <Route index element={<Question />} />
                <Route path=':id' element={<QuestionDetail />} />
                <Route path='realtime' element={<RealtimeQuestion />} />
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