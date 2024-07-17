import { createSlice } from '@reduxjs/toolkit';

let shop = createSlice({
    name: 'shop',
    initialState: [
        {
            id: 0,
            title: "White and Black",
            content: "Born in France",
            price: 120000,
            count: 0
        },

        {
            id: 1,
            title: "Red Knit",
            content: "Born in Seoul",
            price: 110000,
            count: 0
        },

        {
            id: 2,
            title: "Grey Yordan",
            content: "Born in the States",
            price: 130000,
            count: 0
        }
    ],
    reducers: {
        
    }
})

export let { changeMain } = shop.actions

export default shop;