import React from 'react'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import { baseImageURL } from '../constans/apiConstans'



const Hero = () => {

    const {movieList,isLoading} = useSelector((store) => ({
      movieList: store.movieReducer.popularMovies,
      isLoading:store.movieReducer.isLoading
    }))
  
    const randomIndex = Math.floor(Math.random()*movieList.length)
    const randomMovie = movieList[randomIndex]

    //const {title, overview,vote_average, backdrop_path, id} = randomMovie;
    return (
    <div className='row p-4'>
        {isLoading && <Loading/>}
        {!isLoading && (
          <>
           <div className='col-md-6 d-felx flex-column gap-5 align-items-center justify-content-center' >
              <h1>{randomMovie.title}</h1>
              <p>{randomMovie.overview }</p>
              <p>IMDB: {randomMovie.vote_average}</p>

              <div className='d-flex gap-3'>
                <Link className='btn btn-danger'
                to={`/movie/${randomMovie.id}`}>Film İzle</Link>
                <Link className='btn btn-info'>Listeye ekle</Link>
              </div>
           </div>
           <div className='col-md-6'>
            <img  src={`${baseImageURL}${randomMovie.backdrop_path}`} alt="" />
           </div>
          </>


        )}
    </div>
  )
}

export default Hero