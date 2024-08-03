import 'bootstrap/dist/css/bootstrap.min.css';
import Goods from './Goods.js';
import { useEffect } from 'react';
import Main,{MovieHeader} from '../main/Main.js';
import { useDispatch, useSelector } from 'react-redux';
import { foodData } from '../../slice/foodSlice.js';
import { goodsData } from '../../slice/goodsSlice.js';
import { goodsSetData } from '../../slice/goodsSetSlice.js';

// Store 전체 관리 컴포넌트
function Shop() {
    // let disPatch = useDispatch();
    // let foodState = useSelector((state) => state.food);
    // let goodsState = useSelector((state) => state.goods);
    // let goodsSetState = useSelector((state) => state.goodsSet);

    // useEffect(()=>{
    //     disPatch(foodData());
    //     disPatch(goodsData());
    //     disPatch(goodsSetData());
    //     // 여기에다가 엑시오스 부분 넣으면됨
    // },[disPatch])

    // if (foodState.loading || goodsState.loading || goodsSetState.loading) {
    //     return <div>로딩창</div>;
    // }

    // if (foodState.error || goodsState.error || goodsSetState.error) {
    //     return <div>에러메세지</div>;
    // }

    // if (!foodState.data || foodState.data.length === 0) {
    //     return <div>데이터가 없습니다!</div>;
    // }

    return (
        <div className="store-main">
            <MovieHeader/>
            <Goods />
        </div>
    )
}

export default Shop;