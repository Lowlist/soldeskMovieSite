import { Suspense, useEffect, useState } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import Notice from './routes/support/notice/Notice.js';
import Support from './routes/support/Support.js';
import RealtimeQuestion from './routes/support/RealtimeQuestion.js';
import Question from './routes/support/question/Question.js';
import NoticeDetail from './routes/support/notice/NoticeDetail.js';
import QuestionDetail from './routes/support/question/QuestionDetail.js';
import NoticeCrate from './routes/support/notice/NoticeCreate.js';
import QuestionCreate from './routes/support/question/QuestionCreate.js';
import Maps from './routes/gps/NaverMap.js';
import Login from './routes/login/login.js';
import Page from './routes/login/page.js';
import Re from './routes/login/register.js';
import PaymentPage from './routes/ticketing/payments/PaymentPage.js';
import GoodsBasket from './routes/shop/GoodsBasket.js';
import SignUp from './routes/member/SignUp.js';
import { foodData } from './slice/foodSlice.js';
import { goodsData } from './slice/goodsSlice.js';
import { goodsSetData } from './slice/goodsSetSlice.js';
import { basketData } from './slice/shopCartSlice.js';
import MovieTop from './routes/movieInfo/MovieTop.js';
import { noticeData } from './slice/noticeSlice.js';
import { movieData } from './slice/movieSlice.js';

// 내부 스테이트 들은 알아서 만들고 알아서 정리하세요!
// 공용스테이트같은 경우에는 redux사용해서 정리할것!
// 폴더같은 경우엔 routes/.../... 이런식으로 구성할것!

// 디자인 -> HTML/CSS -> 기능 -> 데이터바인딩
// 자바에서 걍 json정보를 스트링으로 전달해서 파싱하는방법 << 권혁영 1픽
// 키값만 가져와서 처리후 파싱하는방법 (Axios) << 두번사용함

function App() {

  // 리덕스 Axios 는 최상위에 불러와서 내려받는게 최고라서 이렇게 할수밖에 없었음...

  let disPatch = useDispatch();
  let foodState = useSelector((state) => state.food);
  let goodsState = useSelector((state) => state.goods);
  let goodsSetState = useSelector((state) => state.goodsSet);
  let basketState = useSelector((state) => state.shopCart);
  let noticeState = useSelector((state) => state.notice);
  let movieState = useSelector((state) => state.movie);

  //첫 기동할떄 디스패치로 가져와야함
  useEffect(() => {
    disPatch(foodData());
    disPatch(goodsData());
    disPatch(goodsSetData());
    disPatch(basketData());
    disPatch(noticeData());
    disPatch(movieData());
  }, [disPatch]);

  if (foodState.loading || goodsState.loading || goodsSetState.loading || basketState.loading || noticeState.loading || movieState.loading) {
    return <div>로딩창</div>;
  }

  if (foodState.error || goodsState.error || goodsSetState.error || basketState.error || noticeState.error || movieState.error) {
    return <div>에러메세지</div>;
  }

  if (!foodState.data || foodState.data.length === 0) {
    return <div>데이터가 없습니다!</div>;
  }

  return (
    <div className="App">
      
      {/* Suspense 의 기능은 페이지가 불러오는 도중일때 fallback 에 등록한 Div 및 컴포넌트를 보여줌 */}
      <Suspense fallback={<div>로딩중임</div>}>
          <Routes>
            <Route path="/" element={ <Main></Main> }/>

            <Route path="/ticket" element={ <Ticket/> }></Route>
            <Route path="/seat" element={ <Seat/> }></Route>
            <Route path="/PaymentPage" element={<PaymentPage/>} ></Route>
            
            {/* 재원이형이랑 공용으로 쓸 예정 */}
            <Route path="/order" element={<>결제창</>}></Route>

            <Route path="/store" element={<Shop/>}>
              <Route path="package" element={<PackageGoods/>}></Route>
              <Route path="food" element={<DrinkFood/>}></Route>
              <Route path="giftTicket" element={<GiftTicket/>}></Route>
              <Route path="basket" element={<GoodsBasket/>}></Route>
              <Route path="payment" element={<GoodsBasket/>}></Route>
              <Route path="result" element={<GoodsBasket/>}></Route>
              <Route path=':id' element={<GoodsDetail/>}></Route>
              <Route path="search" element={<> 검색임 </>}></Route>
            </Route>

            <Route path="/movie" element={<Outlet/>}>
              <Route path="main" element={<MovieList/>}></Route>
              <Route path="top" element={<MovieTop/>}></Route>
              <Route path="info/:movieId/:movieSeq" element={<Movie/>}>
                <Route path="schedule" element={<>/ 해당 영화에 대한 상영관 스케줄</>}></Route>
                <Route path="review" element={<>/ 해당 영화에 대한 리뷰 게시판</>}></Route>
              </Route>
              <Route path="theater" element={<>/ 상영관 정보 </>}></Route>
              <Route path="search" element={<>/ 영화 검색정보 URL </>}></Route>
            </Route>

            <Route path="/member" element={<Outlet/>}>
              <Route path="signUp" element={<SignUp/>}></Route>
              <Route path="signIn" element={<Login/>}></Route>
              <Route path="myPage" element={<>마이페이지임</>}></Route>
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
                <Route path='write' element={<NoticeCrate />} />
              </Route>
              <Route path='question' element={<><Outlet /></>}>
                <Route index element={<Question />} />
                <Route path=':id' element={<QuestionDetail />} />
                <Route path='realtime' element={<RealtimeQuestion />} />
                <Route path='write' element={<QuestionCreate />} />
              </Route>
            </Route>

            <Route path="/gps" element={<Outlet></Outlet>}>
              <Route path="map" element={<Maps/>}></Route>
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