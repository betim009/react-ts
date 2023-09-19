import './App.css'

import { useState } from 'react'

function App() {
  const [showImg, setShowImg] = useState(true);
  const [counter, setCounter] = useState(0);

  const handleClick = () => setShowImg(!showImg);

  const handleClickTwo = () => setCounter(counter + 1);

  return (
    <>
      <h1>React TypeScript!</h1>

      <div>
        {showImg && <img src="src/assets/react.png" alt="imagem01" style={{ width: '250px' }} />}

        <button onClick={handleClick}>
          {showImg ? 'Esconder Imagem' : 'Mostrar imagem'}
        </button>
      </div>

      <div>
        <button onClick={handleClickTwo}>
          {counter}
        </button>
      </div>


    </>
  )
}

export default App
