import 'bootstrap/dist/css/bootstrap.min.css';
import Goods from './Goods.js';
import { useEffect } from 'react';
import Main,{MovieHeader} from '../main/Main.js';
import { useDispatch, useSelector } from 'react-redux';
import { foodData } from '../../slice/foodSlice.js';
import { goodsData } from '../../slice/goodsSlice.js';

// Store 전체 관리 컴포넌트
function Shop() {
    let disPatch = useDispatch();
    let state = useSelector( (state)=>{ return state } );
    let { data, loading, error } = useSelector((state) => state.food);

    useEffect(()=>{
        disPatch(foodData());
        disPatch(goodsData());
    },[disPatch])

    if (loading) {
        return <div>로딩창</div>;
    }
    if (error) {
        return <div>에러메세지</div>;
    }
    if (!data || data.length === 0) {
        return <div>데이터가 없습니다!</div>;
    }

    return (
        <div className="store-main">
            {/* {data[0]?.no ? data[0].no : 'No data available'} */}
            <MovieHeader/>
            <Goods />
        </div>
    )
}

export default Shop;