import React from 'react'
import { useSelector } from 'react-redux'


const Hero = () => {

    const {movieList} = useSelector((store) => ({movieList: store.movieReducer.popularMovies}))
  
    console.log(movieList)
    return (
    <div>Hero</div>
  )
}

export default Hero