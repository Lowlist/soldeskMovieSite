import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Shop from './routes/shop/Shop.js';
import Ticketing from './routes/ticketing/Ticketing.js';

// 내부 스테이트 들은 알아서 만들고 알아서 정리하세요!
// 공용스테이트같은 경우에는 redux사용해서 정리할것!
// 폴더같은 경우엔 routes/.../... 이런식으로 구성할것!

// 디자인 -> HTML/CSS -> 기능 -> 데이터바인딩
// 자바에서 걍 json정보를 스트링으로 전달해서 파싱하는방법 << 권혁영 1픽
// 키값만 가져와서 처리후 파싱하는방법 (Axios) << 두번사용함

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
      {/* <span onClick={ ()=>{ c(따봉+1) } }>따봉</span>{따봉} */}
      <Shop></Shop>
      {/* <Ticketing></Ticketing> */}
    </div>
  );
}

export default App;