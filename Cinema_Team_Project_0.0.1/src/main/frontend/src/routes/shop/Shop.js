import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieHeader } from '../main/Main.js';
import Goods from './Goods.js';

// Store 전체 관리 컴포넌트
function Shop() {
    return (
        <div className="store-main">
            <MovieHeader/>
            <Goods />
        </div>
    )
}

export default Shop;