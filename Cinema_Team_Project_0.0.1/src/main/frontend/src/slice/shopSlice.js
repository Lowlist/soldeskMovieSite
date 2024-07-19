import { createSlice } from '@reduxjs/toolkit';

let shop = createSlice({
    name: 'shop',
    initialState: [
        {
            id: 0,
            title: "우리 패키지",
            content: "콘텐츠콘텐츠콘텐츠콘텐츠콘텐츠콘텐츠",
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