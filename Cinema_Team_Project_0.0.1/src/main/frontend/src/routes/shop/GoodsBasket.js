import { useState } from 'react';
import style from './style/GoodsBasket.module.css';

function GoodsBasket(){
    let [checkBoxAll , setCheckBoxAll] = useState(true);
    // 체크박스 여부를 Redux로 추가하는 방식이 더 나을꺼같음.
    let [checkBox , setCheckBox] = useState(true);
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
                    <div className={style.basketStepInfoIcon}></div>
                    <div className={style.basketStepText}>
                        <div className={style.basketStepInfoSmall}>STEP 01</div>
                        <div className={style.basketStepInfoLarge}>장바구니</div>
                    </div>
                    <div className={style.basketStepRightIcon}></div>
                </div>

                <div className={style.basketStepOrder}>
                    <div className={style.basketStepOrderIcon}></div>
                    <div className={style.basketStepText}>
                        <div className={style.basketStepOrderSmall}>STEP 02</div>
                        <div className={style.basketStepOrderLarge}>결제하기</div>
                    </div>
                    <div className={style.basketStepRightIcon}></div>
                </div>
                
                <div className={style.basketStepComple}>
                    <div className={style.basketStepCompleIcon}></div>
                    <div className={style.basketStepText}>
                        <div className={style.basketStepCompleSmall}>STEP 03</div>
                        <div className={style.basketStepCompleLarge}>결제완료</div>
                    </div>
                </div>
            </div>

            <hr className={style.shopBasketHrOne} />

            <div className={style.goodsBasketList}>
                <div className={style.basketListCheckLine}>
                    <div className={checkBoxAll === true ? style.basketListAllCheckBox : style.basketListAllCheckBoxAfter}
                        onClick={ ()=>{ switchCheckBoxAll() } }></div>
                    <div className={style.basketListCheckLineName}>상품명</div>
                    <div className={style.basketListCheckLineSellPrice}>판매금액</div>
                    <div className={style.basketListCheckLineAmount}>수량</div>
                    <div className={style.basketListCheckLineBuyPrice}>구매금액</div>
                    <div className={style.basketListCheckLineBuySelect}>선택</div>
                </div>

                {/* 데이터 바인딩후 map 문 돌려야됨 */}
                <div className={style.basketListItemLine}>
                    <div className={checkBox === true ? style.basketListAllCheckBox : style.basketListAllCheckBoxAfter}
                        onClick={ ()=>{ switchCheckBox() } }></div>
                    <div className={style.basketListItemContentLine}>
                        <div className={style.basketListItemImg}></div>
                        <div className={style.basketListItemContent}>
                            <div className={style.basketListItemContentName}></div>
                            <div className={style.basketListItemContentNotice}></div>
                        </div>
                    </div>
                    <div className={style.basketListItemAmountLine}></div>
                </div>

                <div className={style.basketListItemLine}>
                    <div className={checkBox === true ? style.basketListAllCheckBox : style.basketListAllCheckBoxAfter}
                        onClick={ ()=>{ switchCheckBox() } }></div>
                    <div className={style.basketListItemContentLine}>
                        <div className={style.basketListItemImg}></div>
                        <div className={style.basketListItemContent}>
                            <div className={style.basketListItemContentName}></div>
                            <div className={style.basketListItemContentNotice}></div>
                        </div>
                    </div>
                    <div className={style.basketListItemAmountLine}></div>
                </div>

                <div className={style.basketListItemLine}>
                    <div className={checkBox === true ? style.basketListAllCheckBox : style.basketListAllCheckBoxAfter}
                        onClick={ ()=>{ switchCheckBox() } }></div>
                    <div className={style.basketListItemContentLine}>
                        <div className={style.basketListItemImg}></div>
                        <div className={style.basketListItemContent}>
                            <div className={style.basketListItemContentName}></div>
                            <div className={style.basketListItemContentNotice}></div>
                        </div>
                    </div>
                    <div className={style.basketListItemAmountLine}></div>
                </div>

                <div className={style.basketListDel}></div>
                <div className={style.basketListNotice}></div>
            </div>

            <div className={style.basketTotalLine}>
                <div className={style.basketTotalHeadLine}></div>
                <div className={style.basketTotalResultLine}></div>
            </div>

            <div className={style.basketButtonLine}>
                <div className={style.basketBuyButton}></div>
            </div>

        </div>
    )
}

export default GoodsBasket;