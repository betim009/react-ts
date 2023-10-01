import { MovieType } from '../types';

type MovieDetailsProps = {
  movie: MovieType;
};

function MovieDetails({ movie }: MovieDetailsProps) {
  return (
    <div>
      <h4>Detalhes do Filme:</h4>
      <p>
        <strong>Diretor: </strong>
        {movie.director}
      </p>
      <p>
        <strong>Lançamento: </strong>
        {movie.releaseYear}
      </p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetails;