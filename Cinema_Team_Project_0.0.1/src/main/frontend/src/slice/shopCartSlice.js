import { createSlice } from '@reduxjs/toolkit';

let shopCart = createSlice({
    name: 'shopCart',
    initialState:  [
    ],
    reducers:{
        // DB랑 연동시켜야함.
        addCart(state,action) {
            let item = state.find(item => item.id === action.payload.id)
            if(item){
                if(item.count === 0){
                    item.count += 1;
                } else {
                    alert("이미 장바구니에 담겨있습니다!");
                }
            } else {

                // push문을 parameter 전송 후 DB에 추가하면 될듯? ver1
                // axios요청으로 파라미터 전송 후 리덕스 청크로 받아와야 할듯?
                // 비동기 방식이 되는지 잘 모르겠음
                
                state.push({ 
                    id : action.payload.id, title: action.payload.data.title, content: action.payload.data.content,
                    count : action.payload.counts , price: action.payload.data.price, salePrice: action.payload.data.salePrice,
                    img: action.payload.data.img , checkBox: true
                });
            }
        },
        checkBox(state,action){
            let item = state.find(item => item.id === action.payload.data.id)
            if(item.checkBox){
                item.checkBox = false;
            } else {
                item.checkBox = true;
            }
        },
        checkBoxAll(state,action){
            for(let i=0 ; i < state.length ; i++){
                if(action.payload.checkAll){
                    state[i].checkBox = true;
                }else{
                    state[i].checkBox = false;
                }
            }
        },
        plusCount(state, action) {
            let item = state.find(item => item.id === action.payload.id)
            if(item){
                item.count += 1;
            }
        },
        minusCount(state, action) {
            let item = state.findIndex(item => item.id === action.payload.id)
            if(item !== -1){
                state[item].count -= 1;
                if(state[item].count === 0){
                    state.splice(item , 1);
                }
            }
            if(action.payload.del){
                item = state.findIndex(item => item.id === action.payload.id)
                state.splice(item , 1);
            }
        },
        delBasket(state, action){
            let item = state.findIndex(item => item.id === action.payload.data.id)
            state.splice(item , 1);
        },
        // 로직 수정해야됨 체크 많이되있는데 3개까지밖에 삭제안됨 버그임
        delCheckBoxList(state){
            let hasChecked = state.some(item => item.checkBox);
            if(hasChecked){
                for (let i=0 ; i<state.length ; i++){
                    if(state[i].checkBox){
                        state.splice(i,1);
                    }
                }
            } else {
                alert("삭제 할 상품이 선택되지 않았습니다!");
            }
        }
    }
})
export let { addCart, plusCount, minusCount, checkBox, checkBoxAll, delBasket , delCheckBoxList } = shopCart.actions

export default shopCart;