import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi.jsx'
import { APIKey } from '../../common/apis/MovieApiKey.jsx'

// to use asyncronus action creators createAsyncThunk
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    
    const movieText = "Matrix"

    const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data
})

const initialState = {
    movies: [],
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fetched succesfully")
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejectede]: (state, {payload}) => {
            console.log("Rejected")
        }
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;