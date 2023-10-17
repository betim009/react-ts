
import { useState } from 'react'
import './App.css'
import Greeting from './components/'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='container'>
      <Greeting name={'Alberto'} />
      <Greeting name={'Cazuza'} />
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <h3>{counter}</h3>
      <br />
    </div>
  )
}

export default App