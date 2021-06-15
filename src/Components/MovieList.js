import React from 'react'
import MovieCard from './MovieCard';



const MovieList = ({ movies,search }) =>{
    return (
        <div className="cardGroup">
        
        {movies
          .filter((el)=> el.name.toLowerCase().includes(search.toLowerCase()))
          .map((movies,key) => (
          <MovieCard movie={movies} key={key}/> 
        ))}
        </div>
    );
};

export default MovieList ;

