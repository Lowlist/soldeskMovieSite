import { createSlice } from '@reduxjs/toolkit';

let shopCart = createSlice({
    name: 'shopCart',
    initialState:  [
    ],
    reducers:{
        // DB랑 연동시켜야함.
        addCart(state,action) {
            let item = state.find(item => item.id === action.payload.data.id)
            if(item){
                if(item.count === 0){
                    item.count += 1;
                }else{
                    alert("이미 장바구니에 담겨있습니다!");
                }
            }else{
                //push문을 parameter 전송 후 DB에 추가하면 될듯?
                state.push({ 
                    id : action.payload.data.id, title: action.payload.data.title, content: action.payload.data.content,
                    count : action.payload.counts , price: action.payload.data.price, salePrice: action.payload.data.salePrice,
                    checkBox: true,checkBoxAll: true
                });
            }
        },
        checkBox(state,action){
            let item = state.find(item => item.id === action.payload.data.id)
            if(item.checkBox){
                item.checkBox = false;
            }else{
                item.checkBox = true;
            }
        },
        checkBoxAll(state){
            for(let i=0 ; i < state.length ; i++){
                if(state[i].checkBox){
                    state[i].checkBox = false;
                    state[i].checkBoxAll = false;
                }else{
                    state[i].checkBox = true;
                    state[i].checkBoxAll = true;
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
        }
    }
})
export let { addCart, plusCount, minusCount, checkBox, checkBoxAll } = shopCart.actions

export default shopCart;