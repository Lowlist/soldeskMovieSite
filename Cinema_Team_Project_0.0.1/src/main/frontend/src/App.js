import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Shop from './routes/shop/Shop.js';

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
<<<<<<< HEAD
      <header className="App-header">
        <span onClick={ ()=>{ c(따봉+1) } }>따봉</span>{따봉}
        {hello}
      </header>
=======
      {/* <span onClick={ ()=>{ c(따봉+1) } }>따봉</span>{따봉} */}
      <Shop></Shop>
>>>>>>> 95f31d83da1127696441b804816cbfcec898c0f7
    </div>
  );
}

export default App;