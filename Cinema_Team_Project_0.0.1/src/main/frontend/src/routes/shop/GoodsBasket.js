import { useState } from 'react';
import style from './style/GoodsBasket.module.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function GoodsBasket(){
    let [checkBoxAll , setCheckBoxAll] = useState(true);
    let location = useLocation();
    let state = useSelector( (state)=>{ return state } );
    let [count,setCount] = useState(1);
    let [checkBox , setCheckBox] = useState(true);

    let activateBasket = false;
    let activatePayment = false;
    let activateResult = false;

    switch (location.pathname) {
        case "/store/basket":
            activateBasket = true;
            break;
        case "/store/payment":
            activatePayment = true;
            break;
        case "/store/result":
            activateResult = true;
            break;
        default:
            break;
    }

    let switchCheckBoxAll = () =>{
        setCheckBoxAll(!checkBoxAll)
        setCheckBox(!checkBox)
    }

    let switchCheckBox = () =>{
        setCheckBox(!checkBox)
    }

    return(
        <div className={style.goodsBasketLine}>
            <div className={style.goodsBasketStepLine}>
                <div className={style.basketStepInfo}>
                    <div className={activateBasket === false ? style.basketStepInfoIcon : style.basketStepInfoIconR}></div>
                    <div className={style.basketStepText}>
                        <div className={activateBasket === false ? style.basketStepInfoSmall : style.basketStepInfoSmallR}>STEP 01</div>
                        <div className={activateBasket === false ? style.basketStepInfoLarge : style.basketStepInfoLargeR}>장바구니</div>
                    </div>
                    <div className={style.basketStepRightIcon}></div>
                </div>

                <div className={style.basketStepOrder}>
                    <div className={activatePayment === false ? style.basketStepOrderIcon : style.basketStepOrderIconR}></div>
                    <div className={style.basketStepText}>
                        <div className={activatePayment === false ? style.basketStepOrderSmall : style.basketStepOrderSmallR}>STEP 02</div>
                        <div className={activatePayment === false ? style.basketStepOrderLarge : style.basketStepOrderLargeR}>결제하기</div>
                    </div>
                    <div className={style.basketStepRightIcon}></div>
                </div>
                
                <div className={style.basketStepComple}>
                    <div className={activateResult === false ? style.basketStepCompleIcon : style.basketStepCompleIconR}></div>
                    <div className={style.basketStepText}>
                        <div className={activateResult === false ? style.basketStepCompleSmall : style.basketStepCompleSmallR}>STEP 03</div>
                        <div className={activateResult === false ? style.basketStepCompleLarge : style.basketStepCompleLargeR}>결제완료</div>
                    </div>
                </div>
            </div>

            <hr className={style.shopBasketHrOne} />

            <div className={style.goodsBasketList}>
                <div className={style.basketListCheckLine}>
                    <div className={style.basketListCheckBoxLine}>
                    {   
                        activateBasket &&
                        <div className={checkBoxAll === true ? style.basketListAllCheckBox : style.basketListAllCheckBoxAfter}
                            onClick={ ()=>{ switchCheckBoxAll() } }>
                        </div>
                    }
                    </div>
                    <div className={style.basketListCheckLineName}>상품명</div>
                    <div className={style.basketListCheckLineSellPrice}>판매금액</div>
                    <div className={style.basketListCheckLineAmount}>수량</div>
                    <div className={style.basketListCheckLineBuyPrice}>구매금액</div>
                    {activateBasket && <div className={style.basketListCheckLineBuySelect}>선택</div>}
                </div>

                {/* 여기서부터 Map문 시작 */}
                {
                    state.shop.map((a,i) =>
                        <div className={style.basketListItemLine}>
                            {
                                activateBasket &&
                                <div className={style.basketListItemCheckBoxLine}>
                                    <div className={checkBox === true ? style.basketListCheckBox : style.basketListCheckBoxAfter}
                                        onClick={() => { switchCheckBox() }}></div>
                                </div>
                            }
                            <div className={activateBasket === true ? style.basketListItemContentLine : style.basketListItemContentLineAct}>
                                <img className={style.basketListItemImg} src={'https://codingapple1.github.io/shop/shoes2.jpg'}></img>
                                <div className={style.basketListItemContent}>
                                    <b className={style.basketListItemContentName}>{state.shop[i].title}</b>
                                    <div className={style.basketListItemContentNotice}>
                                        {state.shop[i].content}
                                    </div>
                                </div>
                                <div className={style.basketListItemPriceLine}>
                                    <b className={style.basketListItemPrice}>{state.shop[i].salePrice.toLocaleString("ko-KR")}원</b>
                                    <div className={style.basketListItemSalePrice}>{state.shop[i].price.toLocaleString("ko-KR")}원</div>
                                </div>
                                {
                                    activateBasket === true ?
                                        <div className={style.basketListItemAmountLine}>
                                            <div className={style.basketListItemAmountChangeLine}>
                                                <div className={style.basketListItemAmountChangeText}>1</div>
                                                <div className={style.basketListItemAmountChangeButton}>
                                                    <div className={style.basketListItemAmountChangePlus}></div>
                                                    <div className={style.basketListItemAmountChangeMinus}></div>
                                                </div>
                                                <b className={style.basketListItemAmountButton}>변경</b>
                                            </div>
                                        </div>
                                        :
                                        <div className={style.basketListItemAmountLine}>
                                            <div className={style.basketListItemAmountTextAct}>66</div>
                                        </div>
                                }
                                <b className={style.basketListItemBuyPrice}>{state.shop[i].salePrice.toLocaleString("ko-KR")}원</b>
                                {
                                    activateBasket &&
                                    <div className={style.basketListButtonLine}>
                                        <b className={style.basketListItemSelectButton}>바로구매</b>
                                        <div className={style.basketListItmeDel}></div>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }

                {
                activateBasket &&
                <div className={style.basketNoticeLine}>
                     <b className={style.basketListDel}>선택상품 삭제{"("+2+")"}</b>
                    <div className={style.basketListNotice}> 장바구니에 담긴 상품은 최대 30일까지 보관됩니다. </div>
                </div>
                }
            </div>

            <div className={style.basketTotalLine}>
                <div className={style.basketTotalHeadLine}>
                    <div className={style.basketTotalHead}>총 상품 금액</div>
                    <div className={style.basketTotalHeadSale}>할인금액</div>
                    <div className={style.basketTotalHeadResult}>총 결제 예정금액</div>
                </div>
                <div className={style.basketTotalResultLine}>
                    <div className={style.basketTotalResult}>410,000원</div>
                    <div className={style.basketTotalResultMinus}></div>
                    <div className={style.basketTotalResultSale}>10,000원</div>
                    <div className={style.basketTotalResultPlus}></div>
                    <div className={style.basketTotalResultTotal}>400,000원</div>
                </div>
            </div>

            <div className={style.basketButtonLine}>
                <div className={style.basketBuyButton}></div>
            </div>

        </div>
    )
}

export default GoodsBasket;