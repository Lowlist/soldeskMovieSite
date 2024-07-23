import { useState } from 'react';
import style from './style/GoodsBasket.module.css';

function GoodsBasket(){
    let [checkBox , setCheckBox] = useState(true);
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
                    <div className={checkBox === true ? style.basketListAllCheckBox : style.basketListAllCheckBoxAfter}
                         onClick={ ()=>{ setCheckBox(false) } }></div>
                    <div className={style.basketListCheckLineName}>상품명</div>
                    <div className={style.basketListCheckLineSellPrice}>판매금액</div>
                    <div className={style.basketListCheckLineAmount}>수량</div>
                    <div className={style.basketListCheckLineBuyPrice}>구매금액</div>
                </div>

                <div className={style.basketListItemLine}></div>
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