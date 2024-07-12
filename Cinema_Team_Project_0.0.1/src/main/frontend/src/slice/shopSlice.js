import { createSlice } from '@reduxjs/toolkit';

let shop = createSlice({
    name: 'shop',
    initialState: { view: true , package: false , giftTicket: false, drinkFood: false },
    reducers: {
        changeView(state,actions){
            if(actions.payload.view){
                return state.package === false;
            }
            if(actions.payload.package){
                return state.view === false;
            }
        }
    }
})

export let { changeView } = shop.actions

export default shop;