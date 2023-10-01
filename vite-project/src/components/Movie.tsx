import './Movie.css';
import { useState } from 'react';
import { MovieType } from '../types';
import MovieDetails from './MovieDetails';

type MovieProps = {
  movie: MovieType;
  onToggleFavorite: (movieId: number) => void
};

function Movie({ movie, onToggleFavorite }: MovieProps) {
// a função set é a única que pode alterar o estado
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    // logica
    setShowDetails(!showDetails);
  };

  return (
    <div className="MovieCard">
      <h3>{movie.name}</h3>
      <img src={ movie.image } alt={ movie.name } />
      <div>
        <button
          className="favorite"
          onClick={ () => onToggleFavorite(movie.id) }
          style={ { background: 'none', border: 'none' } }
        >
          {movie.isFavorited ? '❤️' : '♡'}
        </button>
      </div>
      <div>
        {/* <button onClick={ ()=> setShowDetails(!showDetails) }> */}
        {/* <button onClick={ () => handleShowDetails() }> */}
        <button onClick={ handleShowDetails }>
          { showDetails ? 'Ocultar Detalhes' : 'Mostrar Detalhes'}
        </button>
      </div>

      { showDetails && <MovieDetails movie={ movie } /> }
    </div>
  );
}

export default Movie;