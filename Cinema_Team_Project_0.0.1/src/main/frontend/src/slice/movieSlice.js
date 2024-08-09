import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const today = new Date();
const date = new Date(today);
date.setDate(today.getDate());
const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;

export const movieData = createAsyncThunk(
    'movie/movieData',
    async () => {
        let response = await axios.get('/movie/main', { params: { releaseDate: formattedDate } });
        return response.data;
  });

let movie = createSlice({
    name: 'movie',
    initialState:{
        data: [],
        loading: false,
        error: false
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(movieData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(movieData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
          })
          .addCase(movieData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export let {  } = movie.actions

export default movie;