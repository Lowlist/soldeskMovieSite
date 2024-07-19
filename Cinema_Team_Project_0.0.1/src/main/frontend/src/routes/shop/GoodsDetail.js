import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './style/GoodsDetail.module.css';

function GoodsDetail(){
    let {id} = useParams();
    let state = useSelector((state)=>{ return state })
    let location = useLocation();
    let findData;
    
    if(location.pathname.indexOf("/store/") !== -1){
        findData = state.shop.find(
            function(x){
                return x.id == id;
            }
        );
    }

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

            <hr/>

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
                            <div className={style.detailTitle}></div>
                            <div className={style.detailTitleSale}></div>
                        </div>

                        {/* Content Start */}

                        <hr className={style.hrTwo}/>

                        <div className={style.detailContentLine}>

                            <div className={style.detailContentProductLine}>
                                <div className={style.detailContentProductName}></div>
                                <div className={style.detailContentProduct}></div>
                            </div>

                            <div className={style.detailContentPeriodLine}>
                                <div className={style.detailContentPeriodName}></div>
                                <div className={style.detailContentPeriod}></div>
                            </div>

                            <div className={style.detailContentOriginLine}>
                                <div className={style.detailContentOriginName}></div>
                                <div className={style.detailContentOrigin}></div>
                            </div>

                            <div className={style.detailContentPlaceLine}>
                                <div className={style.detailContentPlaceName}></div>
                                <div className={style.detailContentPlace}></div>
                            </div>

                        </div>

                        <hr className={style.hrTwo}/>

                        {/* NumberPrice Start */}

                        <div className={style.detailNumberLine}>
                            <div className={style.detailPriceBox}>
                                <div className={style.detailPriceMinus}></div>
                                <div className={style.detailPriceText}></div>
                                <div className={style.detailPricePlus}></div>
                            </div>

                            <div className={style.detailPrice}>
                            </div>
                        </div>
                        
                        <hr className={style.hrTwo}/>

                        {/* Total Start */}

                        <div className={style.detailTotalLine}>
                            <div className={style.detailTotalText}>
                                총 구매금액
                            </div>

                            <div className={style.detailTotal}>

                            </div>
                        </div>

                        {/* Button Start */}

                        <div className={style.detailButtonLine}>
                            <div className={style.detailBasketButton}></div>
                            <div className={style.detailBuyButton}></div>
                        </div>
                        
                    </div>

                </div>

            <hr/>

            {/* 경고창 및 그런거 쏼라쏼라 */}

        </div>
    )
}
export default GoodsDetail;