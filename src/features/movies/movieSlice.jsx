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



export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    
    const seriesText = "House"

    const response = await MovieApi.get(
        `?apikey=${APIKey}&s=${seriesText}&type=series`
    );
    return response.data
})



export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {

    const response = await MovieApi.get(
        `?apikey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data
})



const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {}
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

        // Para películas
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("fetched succesfully")
            return {...state, movies: payload}
        },
        // Para series
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("fetched succesfully")
            return {...state, shows: payload}
        },
        // Para detalles
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
            console.log("fetched succesfully")
            return {...state, selectMovieOrShow: payload}
        },

        [fetchAsyncMovies.rejectede]: (state, {payload}) => {
            console.log("Rejected")
        }
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;