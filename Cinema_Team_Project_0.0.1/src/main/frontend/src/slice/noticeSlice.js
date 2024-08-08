import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const noticeData = createAsyncThunk(
    'notice/noticeData',
    async () => {
        let response = await axios.get('/support/notice');
        return response.data;
  });

let notice = createSlice({
    name: 'notice',
    initialState:{
        data: [],
        loading: false,
        error: false
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(noticeData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(noticeData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(noticeData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export let {  } = notice.actions

export default notice;