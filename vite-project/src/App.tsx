import { useState } from 'react';
import './App.css';
import Form, { FormDataType } from './components/Form';
import MoviesList from './components/MoviesList';
import { MovieType } from './types';
import { moviesData } from './data';

function App() {
  const [movies, setMovies] = useState<MovieType[]>(moviesData);

  const newMovie = (movie: FormDataType) => {
    const newId = movies.length + 1;
    const newMovieWithId = { ...movie, id: newId };
    setMovies([...movies, newMovieWithId]);
  };

  return (
    <>
      <h1>Formulário de Cadastro</h1>
      <Form onAddNewMovie={newMovie} />
      <MoviesList />
    </>
  );
}

export default App;