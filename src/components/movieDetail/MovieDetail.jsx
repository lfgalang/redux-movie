import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from '../../features/movies/movieSlice';

export default function MovieDetail() {

    const {imbdID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSelectedMovieOrShow)
    console.log(data)

    useEffect(() => {
        dispatch(fetchAsyncMovieOrShowDetail(imbdID))
    },[dispatch, imbdID])

    return (
        <div>
            Movie Detail
        </div>
    )
}
