import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const foodData = createAsyncThunk(
    'food/foodData',
    async () => {
        let response = await axios.get('/store/food');
        return response.data;
  });

let food = createSlice({
    name: 'food',
    initialState:{
        data: [],
        loading: false,
        error: false
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(foodData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(foodData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(foodData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export let {  } = food.actions

export default food;