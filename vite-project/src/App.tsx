import { useState } from 'react'
import './App.css'


function App() {
  const [name, SetName] = useState('');

  return (
    <div> 
      <div className='firstContainer'>
        <label>
          Nome:
          <input value={name} onChange={({target}) => SetName(target.value)} />
        </label>
        <h5>Olá {name}</h5>

        <button onClick={() => SetName('')}>Apagar!</button>
      </div>
    </div>
  )
}

export default App