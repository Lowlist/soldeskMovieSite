import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import customAxios from './customAxios';

function App() {
  // IP주소 변수 선언
  const [hello, setHello] = useState('');

  // // IP주소 값을 설정합니다.
  // function callback(data) {
  //   setIp(data);
  // }

  // // 첫번째 렌더링을 다 마친 후 실행합니다.
  // useEffect(
  //   () => {
  //     // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
  //     // customAxios('/ip', callback);
  //     axios.get('/api/hello')
  //       .then(response => setHello(response.data))
  //       .catch(error => console.log(error));
  //   }, []
  // );

  useEffect(() => {
    axios.get('/api/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error))
}, []);
  
  let [따봉,c] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <span onClick={ ()=>{ c(따봉+1) } }>따봉</span>{따봉}
      </header>
    </div>
  );
}

export default App;