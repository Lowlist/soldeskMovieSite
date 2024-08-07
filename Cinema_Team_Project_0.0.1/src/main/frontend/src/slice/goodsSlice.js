import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
// 리덕스 axios에서 사용할떄 이렇게 사용해야함 안하면 에러남
// 이미해봄
import axios from 'axios';

export const goodsData = createAsyncThunk(
  // 이름이 중요함
    'goods/goodsData',
    async () => {
        let response = await axios.get('/store/goods');
        return response.data;
  });

let goods = createSlice({
    name: 'goods',
    initialState:{
        data: [],
        loading: false,
        error: false
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(goodsData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(goodsData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(goodsData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export let {  } = goods.actions

export default goods;