import { createSlice } from '@reduxjs/toolkit';

// Axios로 불러올예정
let shop = createSlice({
    name: 'shop',
    initialState: [
        {
            id: 0,
            title: "우리 패키지",
            content: "콘텐츠콘텐츠콘텐츠콘텐츠콘텐츠콘텐츠",
            price: 80000,
            salePrice: 75000,
            count: 0
        },

        {
            id: 1,
            title: "Red Knit",
            content: "Born in Seoul",
            price: 1500000,
            salePrice: 1350000,
            count: 0
        },

        {
            id: 2,
            title: "Grey Yordan",
            content: "Born in the States",
            price: 130000,
            salePrice: 125000,
            count: 0
        },

        {
            id: 3,
            title: "Grey Yordan",
            content: "Born in the States",
            price: 130000,
            salePrice: 125000,
            count: 0
        },

        {
            id: 4,
            title: "Grey Yordan",
            content: "Born in the States",
            price: 130000,
            salePrice: 125000,
            count: 0
        },

        {
            id: 5,
            title: "Grey Yordan",
            content: "Born in the States",
            price: 130000,
            salePrice: 125000,
            count: 0
        },

        {
            id: 6,
            title: "Grey Yordan",
            content: "Born in the States",
            price: 130000,
            salePrice: 125000,
            count: 0
        }
    ],
    reducers: {
        
    }
})

export let { changeMain } = shop.actions

export default shop;