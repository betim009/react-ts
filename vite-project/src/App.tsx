import { useState } from 'react'
import './App.css'


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('Médio')
  const [resume, setResume] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setSchool('Médio');
    setResume('');
  }

  const validateEmail = (email:string) => {
    // Expressão regular para validar o e-mail
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!validateEmail(email)) {
      alert('Email Inválido')
    }

    if (terms && validateEmail(email)) {
      alert(
        `Nome: ${name}\nemail: ${email}\nEscolaridade: ${school}\nExperiências: ${resume}`
      );
      resetForm();
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <div className='firstContainer'>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <label>
            Nome:
            <input
              required
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>

          <label>
            E-mail
            <input
              required
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

          <label>
            Aceito os termos e condições
            <input
              type="checkbox"
              checked={terms}
              onChange={() => setTerms((prevTerms) => !prevTerms)}
            />
          </label>

          <button>Enviar</button>
        </form>

        {error && (
          <h4>
            Você precisa aceitar os termos e condições para poder enviar o
            currículo
          </h4>
        )}
      </div>
    </div >
  )
}

export default App