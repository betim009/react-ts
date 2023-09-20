import './App.css'

import { useState } from 'react';

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
  const [toolList, setToolList] = useState(toolKit);
  const [inputValue, setInputValue] = useState('');

  const handleNextClick = () => {
    if (index + 1 < toolKit.length) {
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

  const handleAddClick = () => {
    if (inputValue) {
      setToolList([...toolList, inputValue]);
    }
  }

  return (
    <>
      <h1>Caixa de ferramentas de uma Pessoa Desenvolvedora</h1>
      <h2>{toolList[index]}</h2>
      <button onClick={handlePreviousClick}>Anterior</button>
      <button onClick={handleNextClick}>Próximo</button>
      
      <section>
        <h3>Adicione novas ferramentas:</h3>
        <input onChange={({ target }) => setInputValue(target.value)} />
        <button onClick={handleAddClick}>Adicionar</button>
      </section>

      <section>
        <h3>Lista de itens do carrossel:</h3>
        <ul>
          {toolList.map((tool) => (
            <li>{tool}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App
