import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './style/GoodsDetail.module.css';
import { useEffect, useState } from 'react';
import { addCart } from '../../slice/shopCartSlice';

function GoodsDetail(){
<<<<<<< HEAD

    let disPatch = useDispatch();
    let {id} = useParams();
    let [idCheck] = useState(id);
=======
    let disPatch = useDispatch();
    let {id} = useParams();
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
    let state = useSelector( (state)=>{ return state } );
    let [count,setCount] = useState(1);
    let location = useLocation();
    let navigate = useNavigate();
    let findData;
    let checkLength = state.food.data.length + state.goods.data.length;
    
    // 접속된 id param 값을 가져와서 백엔드에서 가져온 데이터의 길이와 비교후 데이터.find로 id값을 찾은후 바인딩
    if(state.food.data.length >= idCheck){
        if(location.pathname.indexOf("/store/") !== -1){
            findData = state.food.data.find(
                function(x){
                    return x.no == idCheck;
                }
            );
        }
    }
    if(state.food.data.length < idCheck && state.food.data.length + state.goods.data.length >= idCheck){
        idCheck = id - state.food.data.length;
        if(location.pathname.indexOf("/store/") !== -1){
            findData = state.goods.data.find(
                function(x){
                    return x.no == idCheck;
                }
            );
        }
    }
    
    if(checkLength < idCheck){
        idCheck = id - checkLength;
        if(location.pathname.indexOf("/store/") !== -1){
            findData = state.goodsSet.data.find(
                function(x){
                    return x.no == idCheck;
                }
            );
        }
    }

    let [price] = useState(findData.price);
    let [salePrice] = useState(findData.salePrice);
    
    if(findData == undefined){
        return(
            <div>
                404임 40404040404040404
            </div>
        )
    }

    return(
        <div>
            <div className={style.detailName}>
                {findData.title}
            </div>
<<<<<<< HEAD
            {console.log(id)}
            {console.log(idCheck)}
=======
            
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
            <hr className={style.hrOne}/>

                {/* Detail Start */}

                <div className={style.detailLine}>

                    {/* Img Start */}

                    <div className={style.detailImgLine}>
                        <img className={style.detailImg} src={findData.img}></img>
                    </div>

                    {/* Text Start */}

                    <div className={style.detailTextLine}>

                        {/* Title Start */}

                        <div className={style.detailTitleLine}>
                            <div className={style.detailTitle}>{salePrice.toLocaleString("ko-KR")}원</div>
                            { <div className={style.detailTitleSale}>{price.toLocaleString("ko-KR")}원</div>}
                        </div>

                        {/* Content Start */}

                        <hr className={style.hrTwo}/>

                        <div className={style.detailContentLine}>

                            <div className={style.detailContentProductLine}>
                                <b className={style.detailContentProductName}>상품구성</b>
<<<<<<< HEAD
                                <div className={style.detailContentProduct}>{findData.content}</div>
=======
                                <div className={style.detailContentProduct}>일반 영화 관람권 4매+더블콤보 1개</div>
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
                            </div>

                            <div className={style.detailContentPeriodLine}>
                                <b className={style.detailContentPeriodName}>유효기간</b>
                                <div className={style.detailContentPeriod}>
<<<<<<< HEAD
                                영화관람권 : 구매일로부터 24개월 이내<br/>
                                팝콘,음료 : 구매일로부터 6개월 이내
=======
                                CGV 영화관람권 : 구매일로부터 24개월 이내<br/>
                                더블콤보 : 구매일로부터 6개월 이내
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
                                </div>
                            </div>

                            <div className={style.detailContentOriginLine}>
                                <b className={style.detailContentOriginName}>원산지</b>
                                <div className={style.detailContentOrigin}>팝콘(팍콘 머그러가는 재열)</div>
                            </div>

                            <div className={style.detailContentPlaceLine}>
                                <b className={style.detailContentPlaceName}>상품교환</b>
                                <div className={style.detailContentPlace}>사용가능 DTO 보기</div>
                            </div>

                        </div>

                        <hr className={style.hrTwo}/>

                        {/* NumberPrice Start */}

                        <div className={style.detailNumberLine}>
                            <div className={style.detailPriceBox}>
                                <div className={style.detailPriceMinus} onClick={ ()=>count !== 1 ? setCount(count-1) : setCount(1)}>-</div>
                                <div className={style.detailPriceText}>{count}</div>
                                <div className={style.detailPricePlus} onClick={ ()=>{ setCount(count+1) } } >+</div>
                            </div>

                            <div className={style.detailPrice}>
                                {(price*count).toLocaleString("ko-KR")}원
                            </div>
                        </div>
                        
                        <hr className={style.hrTwo}/>

                        {/* Total Start */}

                        <div className={style.detailTotalLine}>
                            <b className={style.detailTotalText}>
                                총 구매금액
                            </b>
                            <div className={style.detailTotal}>
                                {(salePrice*count).toLocaleString("ko-KR")}원
                            </div>
                        </div>

                        {/* Button Start */}

                        <div className={style.detailButtonLine}>
<<<<<<< HEAD
                            <div className={style.detailBasketButton} onClick={()=>{ navigate('/store/basket') ; disPatch( addCart({ data : findData , counts : count , id : id }))  }}></div>
=======
                            <div className={style.detailBasketButton} onClick={()=>{ navigate('/store/basket') ; disPatch( addCart({ data : findData , counts : count }))  }}></div>
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
                            <div className={style.detailBuyButton}>구매하기</div>
                        </div>
                        
                    </div>

                </div>

            <hr className={style.hrOne}/>

            {/* 경고창 및 그런거 쏼라쏼라 */}

        </div>
    )
}
export default GoodsDetail;