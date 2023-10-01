import { useState } from 'react';
import Movie from './Movie';
import { moviesData } from '../data';
import { MovieType } from '../types/index';

function MoviesList() {
  const [movies, setMovies] = useState<MovieType[]>(moviesData);

  const toggleFavorite = (movieId: number) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === movieId
          ? { ...movie, isFavorited: !movie.isFavorited }
          : movie
      )
    );
  };

  return (
    <div id="movie-container">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default MoviesList;
