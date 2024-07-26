import { createSlice } from '@reduxjs/toolkit';

let shopCart = createSlice({
    name: 'shopCart',
    initialState:  [
        { id: 0, title: '', content:'', count: 1 , price: 0, salePrice: 0, checkBox: true},
    ],
    reducers:{
        // DB랑 연동시켜야함.
        addCart(state,action) {
            let item = state.find(item => item.id === action.payload.id)
            if(item){
                item.count += 1;
            }else{
                //push문을 parameter 전송 후 DB에 추가하면 될듯?
                state.push({ 
                    id : action.payload.id, title: action.payload.title, content: action.payload.title,
                    count : 1 , price: action.payload.price, salePrice: action.payload.salePrice,
                    checkBox: false
                });
            }
        },
    }
})
export let { addCart } = shopCart.actions

export default shopCart;