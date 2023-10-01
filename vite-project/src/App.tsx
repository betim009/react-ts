import { useState } from 'react'
import './App.css'


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('Médio')
  const [resume, setResume] = useState('');

  return (
    <div>
      <div className='firstContainer'>
        <form action="">
          <label>
            Nome:
            <input
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>

          <label>
            E-mail
            <input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>

          <label>
            Escolaridade
            <select
              value={school}
              onChange={({ target }) => setSchool(target.value)}
            >
              <option value="Médio">Médio</option>
              <option value="Superior">Superior</option>
              <option value="Pós-graduação">Pós-graduação</option>
            </select>
          </label>

          <label>
            Resumo das experiências

            <textarea
              value={resume}
              onChange={({ target }) => setResume(target.value)}
            />
          </label>

          <button>Enviar</button>
        </form>
      </div>
    </div >
  )
}

export default App