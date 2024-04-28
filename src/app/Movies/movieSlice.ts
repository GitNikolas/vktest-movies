import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../../types/MovieType';
// import { getUserMovies } from '../../utils/moviesApi/moviesApi';

export interface ProductsState {
    value: MovieType[];
    status: 'idle' | 'loading' | 'failed';
    error: any;
}

const initialState: ProductsState = {
    value: [],
    status: 'idle',
    error: '',
}

  // export const fetchMovies = createAsyncThunk(
  //   'movies/fetchMovies',
  //   async (_, { rejectWithValue }) => {
  //     try {
  //       const response = await getUserMovies();
  //       if(!response.ok){
  //         throw new Error(response.statusText);

  //       }
  //       return await response.json();
  //     } catch(err:any) {
  //       return rejectWithValue(err.message);
  //     }
  //   }
  // );

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
      saveMovie(state,action){
        state.value.push(action.payload);
      },
      deleteMovie(state,action){
        state.value = state.value.filter(item => item.id != action.payload.id);
      },
    },
    extraReducers: 
    (builder) => {
        // builder
          // .addCase(fetchMovies.pending, (state) => {
          //   state.status = 'loading';
          //   state.error = '';
          // })
          // .addCase(fetchMovies.fulfilled, (state, action) => {
          //   state.status = 'idle';
          //   state.error = '';
          //   if(action.payload && typeof action.payload !== 'string'){
          //     state.value = action.payload;
          //   }
          // })
          // .addCase(fetchMovies.rejected, (state,action) => {
          //   state.status = 'failed';
          //   state.error = action.payload;
          // })
      },
})

export const { saveMovie, deleteMovie } = moviesSlice.actions;

export default moviesSlice.reducer;