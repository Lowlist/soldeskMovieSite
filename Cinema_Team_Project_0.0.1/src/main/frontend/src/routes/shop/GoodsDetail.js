import style from './style/GoodsDetail.module.css';

function GoodsDetail(){
    return(
        <div>
            <div className={style.detailName}>
                ㅋㅋ 이름 나와야됨이제
            </div>
            <hr/>
                <div className={style.detailLine}>
                    <div className={style.detailImgLine}>
                        
                    </div>
                    <div className={style.detailTextLine}>
                        글자라인
                    </div>

                </div>
            <hr/>
        </div>
    )
}
export default GoodsDetail;