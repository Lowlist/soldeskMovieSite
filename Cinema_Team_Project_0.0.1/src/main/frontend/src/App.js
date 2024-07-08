import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Shop from './routes/shop/Shop.js';
import Support from './routes/support/Support.js';
import Notice from './routes/support/Notice.js';
import Question from './routes/support/Question.js';
import RealtimeQuestion from './routes/support/RealtimeQuestion.js';
import { Link, Outlet, Route, Routes, useNavigate, Router } from 'react-router-dom'
import NoticeDetail from './routes/support/NoticeDetail.js';
import QuestionDetail from './routes/support/QuestionDetail.js';

// 내부 스테이트 들은 알아서 만들고 알아서 정리하세요!
// 공용스테이트같은 경우에는 redux사용해서 정리할것!
// 폴더같은 경우엔 routes/.../... 이런식으로 구성할것!

function App() {
  const [hello, setHello] = useState('');
  let [shoes] = useState();
  let [따봉,c] = useState(0);
  useEffect(() => {
    axios.get('/api/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error))
  }, []);
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/support/*' element={<Support />}>
          <Route path="notice" element={<Notice />} />
          <Route path='notice/:id' element={<NoticeDetail />} />
          <Route path="question" element={<Question />} />
          <Route path='question/:id' element={<QuestionDetail />} />
          <Route path="question/realtime" element={<RealtimeQuestion />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;