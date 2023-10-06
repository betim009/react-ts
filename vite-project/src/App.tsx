import { useState } from 'react'
import './App.css'

function App() {
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    school: '',
    resume: '',
  });
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  const resetForm = () => {
    setFormInfo({
      name: '',
      email: '',
      school: 'Médio',
      resume: '',
    });
  }

  const validateEmail = (email: string) => {
    // Expressão regular para validar o e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(formInfo.email)) {
      alert('Email Inválido')
    }

    if (terms) {
      if (validateEmail(formInfo.email)) {
        alert(
          `Nome: ${formInfo.name}\nemail: ${formInfo.email}\nEscolaridade: ${formInfo.school}\nExperiências: ${formInfo.resume}`
        );
        resetForm();
        setTerms(false);
        setError(false);
      }
    } else {
      setError(true);
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Nome:
          <input
            required
            name="name"
            value={formInfo.name}
            onChange={handleChange}
          />
        </label>
        <label>
          E-mail:
          <input
            required
            name="email"
            value={formInfo.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Escolaridade:
          <select
            name="schooling"
            value={formInfo.school}
            onChange={handleChange}
          >
            <option value="Médio">Médio</option>
            <option value="Superior">Superior</option>
            <option value="Pós-graduação">Pós-graduação</option>
          </select>
        </label>
        <label>
          Resumo das experiências
          <textarea
            name="resume"
            value={formInfo.resume}
            onChange={handleChange}
          />
        </label>
        <label>
          Aceito os termos e condições
          <input
            type="checkbox"
            checked={terms}
            onChange={() => setTerms(!terms)}
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
    </>
  );
}

export default App