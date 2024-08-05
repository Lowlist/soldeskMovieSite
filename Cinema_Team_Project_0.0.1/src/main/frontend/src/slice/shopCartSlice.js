import { createSlice } from '@reduxjs/toolkit';

let shopCart = createSlice({
    name: 'shopCart',
    initialState:  [
    ],
    reducers:{
        // DB랑 연동시켜야함.
        addCart(state,action) {
<<<<<<< HEAD
            let item = state.find(item => item.id === action.payload.id)
            if(item){
                if(item.count === 0){
                    item.count += 1;
                } else {
                    alert("이미 장바구니에 담겨있습니다!");
                }
            } else {
                //push문을 parameter 전송 후 DB에 추가하면 될듯?
                state.push({ 
                    id : action.payload.id, title: action.payload.data.title, content: action.payload.data.content,
                    count : action.payload.counts , price: action.payload.data.price, salePrice: action.payload.data.salePrice,
                    img: action.payload.data.img , checkBox: true, checkBoxAll: true, allPrice : 0, allSalePrice : 0 , totalPrice : 0
=======
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
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
                });
            }
        },
        checkBox(state,action){
            let item = state.find(item => item.id === action.payload.data.id)
            if(item.checkBox){
                item.checkBox = false;
<<<<<<< HEAD
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
=======
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
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5
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
<<<<<<< HEAD
        },
        allPrice(state){
            for(let i=0 ; i<state.length ; i++){
                if(state[i].checkBox || state[i].checkBoxAll){
                    state[i].allPrice = state[i].price;
                }else if(!state[i].checkBox || !state[i].checkBoxAll){
                    state[i].allPrice = 0;
                }
            }
        },
        allSalePrice(state){

        },
        totalPrice(state){

        }
    }
})
export let { addCart, plusCount, minusCount, checkBox, checkBoxAll, allPrice, allSalePrice, totalPrice } = shopCart.actions
=======
        }
    }
})
export let { addCart, plusCount, minusCount, checkBox, checkBoxAll } = shopCart.actions
>>>>>>> 149821878f5ca46dcc2bb3d810daef2375cfcae5

export default shopCart;