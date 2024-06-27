import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Shop from './routes/shop/Shop.js';

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
    </div>
  );
}

export default App;