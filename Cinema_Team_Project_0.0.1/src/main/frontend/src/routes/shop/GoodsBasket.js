import { useState } from 'react';
import style from './style/GoodsBasket.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { plusCount, minusCount, checkBox, checkBoxAll } from '../../slice/shopCartSlice';


function GoodsBasket(){
    let navigate = useNavigate();
    let location = useLocation();
    let state = useSelector( (state)=>{ return state } );
    let disPatch = useDispatch();
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
                        <div className={state.shopCart[0]?.checkBoxAll ?? true ? style.basketListAllCheckBox : style.basketListAllCheckBoxAfter}
                            onClick={ ()=>{ disPatch(checkBoxAll()) } }>
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
                    state.shopCart.map((a,i) =>
                        <div className={style.basketListItemLine} key={i}>
                            {
                                activateBasket &&
                                <div className={style.basketListItemCheckBoxLine}>
                                    {console.log(state.shopCart[i].checkBox)}
                                    <div className={state.shopCart[i].checkBox === true ? style.basketListCheckBox : style.basketListCheckBoxAfter}
                                        onClick={() => { disPatch(checkBox({data : state.shopCart[i]})) }}></div>
                                </div>
                            }
                            <div className={activateBasket === true ? style.basketListItemContentLine : style.basketListItemContentLineAct}>
                                <img className={style.basketListItemImg} src={'https://codingapple1.github.io/shop/shoes2.jpg'}></img>
                                <div className={style.basketListItemContent}>
                                    <b className={style.basketListItemContentName}>{state.shopCart[i].title}</b>
                                    <div className={style.basketListItemContentNotice}>
                                        {state.shop[i].content}
                                    </div>
                                </div>
                                <div className={style.basketListItemPriceLine}>
                                    <b className={style.basketListItemPrice}>{state.shopCart[i].salePrice.toLocaleString("ko-KR")}원</b>
                                    <div className={style.basketListItemSalePrice}>{state.shopCart[i].price.toLocaleString("ko-KR")}원</div>
                                </div>
                                {
                                    activateBasket === true ?
                                        <div className={style.basketListItemAmountLine}>
                                            <div className={style.basketListItemAmountChangeLine}>
                                                <div className={style.basketListItemAmountChangeText}>{state.shopCart[i].count}</div>
                                                <div className={style.basketListItemAmountChangeButton}>
                                                    <div className={style.basketListItemAmountChangePlus} onClick={ ()=>{ disPatch(plusCount(state.shopCart[i])) } }></div>
                                                    <div className={style.basketListItemAmountChangeMinus} onClick={ ()=>{ disPatch(minusCount(state.shopCart[i])) } }></div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className={activateBasket === true ? style.basketListItemAmountLine : style.basketListItemAmountLineAct}>
                                            <div className={style.basketListItemAmountTextAct}>{state.shopCart[i].count}</div>
                                        </div>
                                }
                                <b className={style.basketListItemBuyPrice}>{(state.shopCart[i].salePrice * state.shopCart[i].count).toLocaleString("ko-KR")}원</b>
                                {
                                    activateBasket &&
                                    <div className={style.basketListButtonLine}>
                                        <b className={style.basketListItemSelectButton} onClick={()=>{ navigate('/store/payment') }}>바로구매</b>
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
            {/* 백엔드에서 데이터 계산후 가져올 예정 */}
            <div className={style.basketTotalLine}>
                <div className={style.basketTotalHeadLine}>
                    <div className={style.basketTotalHead}>총 상품 금액</div>
                    <div className={style.basketTotalHeadSale}>할인금액</div>
                    <div className={style.basketTotalHeadResult}>총 결제 예정금액</div>
                </div>
                <div className={style.basketTotalResultLine}>
                    <div className={style.basketTotalResult}>300,000원</div>
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