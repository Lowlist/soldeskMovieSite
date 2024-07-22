import { createSlice } from '@reduxjs/toolkit';

let shopCart = createSlice({
    name: 'shopCart',
    initialState:  [
        { id: 0, name: '', count: 1 , price: 0, salePrice: 0 },
    ],
    reducers:{
        
    }
})
export let {  } = shopCart.actions

export default shopCart;