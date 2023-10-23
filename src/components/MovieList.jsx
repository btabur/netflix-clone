import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseImageURL, options } from "../constans/apiConstans";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    axios
      .get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((response) => setMovies(response.data.results));
  }, []);

 
  return (
    <div>
        <h1 className="fs-1 mb-3 mt-3 ms-5">{genre.name}</h1>
      <Splide
      options={{
        gap:'10px',
        autoWidth:true,
        pagination:false
    }}
      aria-label="My Favorite Images">
      {movies?.map((movie)=>(
       <Link to={`/movie/${movie.id}`}>
          <SplideSlide className="m-3 position-relative ">
          <img className="movie"
           src={baseImageURL.concat(movie.poster_path)} alt="Image 1" />
           <span className="movie-vote"> {movie.vote_average}</span>
        </SplideSlide>
       </Link>
      ))}
      
      </Splide>
    </div>
  );
};

export default MovieList;
