import { useEffect, useState } from 'react';
import style from './style/GoodsBasket.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { plusCount, minusCount, checkBox, checkBoxAll, delBasket, delCheckBoxList } from '../../slice/shopCartSlice';

function GoodsBasket(){

    let navigate = useNavigate();
    let location = useLocation();
    let state = useSelector( (state)=>{ return state } );
    let disPatch = useDispatch();
    let activateBasket = false;
    let activatePayment = false;
    let activateResult = false;

    let [checkAll, setCheckAll] = useState(true);
    let [price, setPrice] = useState(0);
    let [salePrice, setSalePrice] = useState(0);
    let [totalPrice, setTotalPrice] = useState(0);
    let [checkTrue, setCheckTrue] = useState(0);

    useEffect(() => {
        // 초기값 true로 설정
        let checkLength = 0;
        let allChecked = true;
        let result = 0;
        let saleResult = 0;
        let totalResult = 0;

        // 포문으로 장바구니 돌린 후 1개라도 false일 경우 break
        for(let i = 0; i < state.shopCart.length; i++) {
            if (!state.shopCart[i].checkBox) {
                allChecked = false;
                break;
            }
        }

        for(let i = 0; i < state.shopCart.length; i++){
            if (state.shopCart[i].checkBox){
                checkLength += 1;
                result += state.shopCart[i].price*state.shopCart[i].count;
                saleResult += (state.shopCart[i].price - state.shopCart[i].salePrice)*state.shopCart[i].count;
                totalResult += state.shopCart[i].salePrice*state.shopCart[i].count;
            }
        }

        // 데이터 세팅
        setCheckTrue(checkLength);
        setCheckAll(allChecked);
        setPrice(result);
        setSalePrice(saleResult);
        setTotalPrice(totalResult);

    }, [state.shopCart, disPatch]);

    // 다함
    // 체크박스따라 계산로직 구현 완료
    // 선택삭제부분 구현 삭제부분 구현

    // todo
    // DB에 인서트 Param 식 만들어야됨
    // 멤버 세션값 받아와서 체킹해야됨

    let handleClick = () => {
        setCheckAll(prevState => !prevState);
        disPatch(checkBoxAll({ checkAll: !checkAll }));
    };

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
                        <div className={ checkAll === true ? style.basketListAllCheckBoxAfter : style.basketListAllCheckBox }
                            onClick={ ()=>{ handleClick(); } }>
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
                                    <div className={state.shopCart[i].checkBox === false ? style.basketListCheckBox : style.basketListCheckBoxAfter}
                                        onClick={() => { disPatch(checkBox({data : state.shopCart[i]})) }}></div>
                                </div>
                            }
                            <div className={activateBasket === true ? style.basketListItemContentLine : style.basketListItemContentLineAct}>
                                <img className={style.basketListItemImg} src={state.shopCart[i].img}></img>
                                <div className={style.basketListItemContent}>
                                    <b className={style.basketListItemContentName}>{state.shopCart[i].title}</b>
                                    <div className={style.basketListItemContentNotice}>
                                        {state.shopCart[i].content}
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
                                        <div className={style.basketListItmeDel} onClick={()=>{disPatch(delBasket({data : state.shopCart[i]}))}}></div>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }

                {
                activateBasket &&
                <div className={style.basketNoticeLine}>
                     <b className={style.basketListDel} onClick={()=>{disPatch(delCheckBoxList())}}>선택상품 삭제{"("+checkTrue+")"}</b>
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
                    <div className={style.basketTotalResult}>{price.toLocaleString("ko-KR")}원</div>
                    <div className={style.basketTotalResultMinus}></div>
                    <div className={style.basketTotalResultSale}>{salePrice.toLocaleString("ko-KR")}원</div>
                    <div className={style.basketTotalResultPlus}></div>
                    <div className={style.basketTotalResultTotal}>{totalPrice.toLocaleString("ko-KR")}원</div>
                </div>
            </div>

            <div className={style.basketButtonLine}>
                {/* 선물하기 추가시 생성예정 */}
                {/* <div className={style.basketPresentButton}>선물하기</div> */}
                <div className={style.basketBuyButton} onClick={()=>{ navigate('/store/payment') }}>구매하기</div>
            </div>
        </div>
    )
}

export default GoodsBasket;