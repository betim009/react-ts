import './App.css'
import Button from './components/Button'
import Input from './components/Input';
import ButtonTwo from './components/button/index'

function App() {
  const handleChange = () => {
    alert('Você digitou algo!');
  };

  const handleClick = () => {
    alert('Outro Clique!');
  }

  const handleClickTwo = (text: string) => {
    alert(text);
  }

  const handleChangeTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <Button />
      <Input
        onChange={handleChange}
      />

      <ButtonTwo
        onClick={handleClick}
      >
        Botão Children
      </ButtonTwo>

      <ButtonTwo
        onClick={() => handleClickTwo('Qualquer Texto')}
      >
        Botão Children
      </ButtonTwo>

      <input
        type='text'
        onChange={(event) => handleChangeTwo(event)}
      />

    </div>
  )
}

export default App
