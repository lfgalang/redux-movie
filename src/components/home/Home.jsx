import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MovieApi from '../../common/apis/MovieApi.jsx'
import { APIKey } from '../../common/apis/MovieApiKey.jsx'
import { addMovies } from '../../features/movies/movieSlice.jsx';
import MovieListing from '../movieListing/MovieListing.jsx'


export default function Home() {
    const movieText = "Harry"
    const dispatch = useDispatch();

    useEffect(() => {        
        const fetchMovies = async () => {
            const response = await MovieApi
                .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log("Error", err);
                });
            dispatch(addMovies(response.data))
        };
        fetchMovies();
    },[]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}
