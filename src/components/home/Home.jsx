import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice.jsx';
import MovieListing from '../movieListing/MovieListing.jsx'


export default function Home() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(fetchAsyncMovies())
        dispatch(fetchAsyncShows())
        
    },[dispatch]);

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    )
}
