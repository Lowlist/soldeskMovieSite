import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const axiosData = createAsyncThunk(
    'dummy/axiosData',
    async () => {
        let response = await axios.get('/store/food');
        return response.data;
  });

let dummy = createSlice({
    name: 'dummy',
    initialState:{
        data: [],
        loading: false,
        error: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(axiosData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(axiosData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(axiosData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export let { changeMain } = dummy.actions

export default dummy;