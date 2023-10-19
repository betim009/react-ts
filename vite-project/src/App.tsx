import { useState, useEffect } from 'react';
import { fetchApi } from './services';


type Search = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};


function App() {
  const [movie, setMovie] = useState<Search[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApi();
      setMovie(data.Search)
      // console.log(data.Search[0])
    }
    fetchData();
  }, []);

  if (!movie) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>Filmes do naruto</h1>
      {
        movie.map((e) => (
          <div key={e.Title}>
            <h5>{e.Title}</h5>
            <img src={e.Poster} />
            <h6>{e.Year} <span>{e.Type}</span></h6>
          </div>
        ))
      }
    </>
  );
}

export default App;