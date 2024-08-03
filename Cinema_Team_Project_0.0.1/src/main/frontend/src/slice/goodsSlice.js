import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goodsData = createAsyncThunk(
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