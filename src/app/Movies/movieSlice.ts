import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../../types/MovieType';
// import { getUserMovies } from '../../utils/moviesApi/moviesApi';
import { deleteProduct, postProduct } from '../../utils/productsApi/productsApi';

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

  export const fetchUserMovies = createAsyncThunk(
    'movies/fetchUserMovies',
    async (_, { rejectWithValue }) => {
      let res = localStorage.getItem('movies');
      console.log(res);
      return res;
    }
  );

  // export const pstProduct = createAsyncThunk(
  //   'products/pstProduct',
  //   async (data:MovieType) => {
  //     // const response = await postProduct(data);
  //     // return response;
  //   }
  // );

  // export const delProduct = createAsyncThunk(
  //   'products/delProduct',
  //   async (id:number) => {
  //     const response = await deleteProduct(id);
  //     return response;
  //   }
  // );

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
      // getUserMovies(state,action){
      //   console.log(action)
      //   state.value = state.value.map((item) => {
      //     if(item.id === action.payload.id && item.amount !== undefined){
      //       item.amount += 1;
      //     }
      //     return item;
      //   })
      // },
      postUserMovies(state,action){
        state.value = state.value.map((item) => {
          // if(item.id === action.payload.id && item.amount !== undefined){
          //   item.amount -= 1;
          // }
          return item;
        })
      },
      movieDelete(state,action){
        state.value = state.value.filter(item => item.id != action.payload);
      },
    },
    extraReducers: 
    (builder) => {
        builder
          .addCase(fetchUserMovies.pending, (state) => {
            state.status = 'loading';
            state.error = '';
          })
          .addCase(fetchUserMovies.fulfilled, (state, action) => {
            state.status = 'idle';
            state.error = '';
            if(action.payload && typeof action.payload !== 'string'){
              state.value = action.payload;
            }
          })
          .addCase(fetchUserMovies.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.payload;
          })
      },
})

export const { postUserMovies } = moviesSlice.actions;

export default moviesSlice.reducer;