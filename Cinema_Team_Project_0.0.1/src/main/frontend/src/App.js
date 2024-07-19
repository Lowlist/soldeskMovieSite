import React, { useState, useEffect } from 'react';
import Index from './routes/info/MovieList.js';

// 내부 스테이트 들은 알아서 만들고 알아서 정리하세요!
// 공용스테이트같은 경우에는 redux사용해서 정리할것!
// 폴더같은 경우엔 routes/.../... 이런식으로 구성할것!

function App() {
  

  return (
    <div className="App">
      {/* <span onClick={ ()=>{ c(따봉+1) } }>따봉</span>{따봉} */}
      <Index></Index>
    </div>
  );
}

export default App;