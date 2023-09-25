import './App.css'

import { useState, useEffect } from 'react';

function App() {
  const toolKit = [
    'JavaScript',
    'TypeScript',
    'React',
    'HTML',
    'CSS',
    'Node',
    'Testes automatizados',
  ];

  const [index, setIndex] = useState(0);
  const [tool, setTool] = useState(toolKit);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(input);
  }, [input]); // queremos que o efeito seja executado toda vez que o estado input for alterado, então incluímos [input]

  const handleNextClick = () => {
    if (index + 1 < tool.length) {
      setIndex(index + 1);
    } else {
      setIndex(0); // Volta para o primeiro elemento
    }
  }

  const handlePreviousClick = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    } else {
      setIndex(toolKit.length - 1); // Vai para o último elemento
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setInput(target.value)
  }

  const handleClick = () => {
    if (input) {
      setTool([...tool, input]); // Adiciona a nova ferramenta à lista existente
      setInput(''); // Reseta o valor do input após a adição da ferramenta
    }
  }

  return (
    <div>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{tool[index]}</h2>
      <button onClick={handlePreviousClick}>Anterior</button>
      <button onClick={handleNextClick}>Próximo</button>

      <p>Adicione uma nova ferramenta!</p>
      <input
        type="text"
        value={input} // resetar o valor do input
        onChange={(event) => handleChange(event)}
      />
      <button
        onClick={handleClick}
      >Cadastrar</button>
    </div>
  );
}

export default App
