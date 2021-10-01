import React from 'react'
import "./movieListing.scss"
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../movieCard/MovieCard.jsx';

export default function MovieListing() {

    const movies = useSelector(getAllMovies)
    // console.log(movies)
    let renderMovies = "";

    renderMovies = movies.Response === "True" ? (
            movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
        ):(
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );
        console.log(movies.Response)

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>
        </div>
    )
}
