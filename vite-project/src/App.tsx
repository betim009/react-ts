import { useEffect } from 'react';
import './App.css'


function App() {

  const fetchCoordinates = async () => {
    const response = await fetch(
      'https://api.wheretheiss.at/v1/satellites/25544'
    );

    // console.log(response);

    if (!response.ok) {
      throw new Error(`Failed to fetch coordinates`);
    }

    const coordinates = await response.json();
    // console.log(coordinates)


    const latitude = Number(coordinates.latitude.toFixed(4));
    const longitude = Number(coordinates.longitude.toFixed(4));

    return { latitude, longitude };
  };

  useEffect(() => {
    fetchCoordinates();
  }, [])


  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default App