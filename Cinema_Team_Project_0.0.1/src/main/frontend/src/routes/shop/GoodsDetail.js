import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import style from './style/GoodsDetail.module.css';
import { useEffect, useState } from 'react';
import { addCart } from '../../slice/shopCartSlice';

function GoodsDetail(){
    let disPatch = useDispatch();
    let {id} = useParams();
    let state = useSelector( (state)=>{ return state } );
    let [count,setCount] = useState(1);
    let location = useLocation();
    let navigate = useNavigate();
    let findData;
    
    if(location.pathname.indexOf("/store/") !== -1){
        findData = state.shop.find(
            function(x){
                return x.id == id;
            }
        );
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
            
            <hr className={style.hrOne}/>

                {/* Detail Start */}

                <div className={style.detailLine}>

                    {/* Img Start */}

                    <div className={style.detailImgLine}>
                        <img className={style.detailImg} src={'https://codingapple1.github.io/shop/shoes' + (findData.id + 1) + '.jpg'}></img>
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
                                <div className={style.detailContentProduct}>일반 영화 관람권 4매+더블콤보 1개</div>
                            </div>

                            <div className={style.detailContentPeriodLine}>
                                <b className={style.detailContentPeriodName}>유효기간</b>
                                <div className={style.detailContentPeriod}>
                                CGV 영화관람권 : 구매일로부터 24개월 이내<br/>
                                더블콤보 : 구매일로부터 6개월 이내
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
                            <div className={style.detailBasketButton} onClick={()=>{ navigate('/store/basket') ; disPatch( addCart({ data : findData , counts : count }))  }}></div>
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