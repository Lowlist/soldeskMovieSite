import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector , useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Goods from './Goods.js';
import { useEffect } from 'react';
import { changeView } from '../../slice/shopSlice.js';

// Store 전체 관리 컴포넌트
function Shop() {
    let state = useSelector((state)=>{ return state })
    let disPatch = useDispatch();
    return (
        <div className="store-main">
            헤더 추가예정
            {state.shop.view && <Goods/>}
            <Outlet></Outlet>
            <br/>
        </div>
    )
}

export default Shop;