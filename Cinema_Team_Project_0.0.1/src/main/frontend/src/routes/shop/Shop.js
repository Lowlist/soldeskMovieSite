import 'bootstrap/dist/css/bootstrap.min.css';
import Goods from './Goods.js';
import { useEffect } from 'react';
import Main,{MovieHeader} from '../main/Main.js';
import { useDispatch, useSelector } from 'react-redux';
import { axiosData } from '../../slice/dummySlice.js';

// Store 전체 관리 컴포넌트
function Shop() {
    let disPatch = useDispatch();
    let state = useSelector( (state)=>{ return state } );
    let { data, loading, error } = useSelector((state) => state.shop);
    useEffect(()=>{
        disPatch(axiosData());
    },[])
    return (
        <div className="store-main">
            <MovieHeader/>
            <Goods />
        </div>
    )
}

export default Shop;