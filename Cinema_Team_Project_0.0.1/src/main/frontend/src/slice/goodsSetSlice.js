import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goodsSetData = createAsyncThunk(
    'goodsSet/goodsSetData',
    async () => {
        let response = await axios.get('/store/goodsSet');
        return response.data;
  });

let goodsSet = createSlice({
    name: 'goodsSet',
    initialState:{
        data: [],
        loading: false,
        error: false
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(goodsSetData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(goodsSetData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(goodsSetData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export let {  } = goodsSet.actions

export default goodsSet;