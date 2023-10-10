import './App.css'
import Greeting from './componets'


function App() {
  return (
    <div className='container'>
      <Greeting 
        name={'Alberto'}
      />
            <Greeting 
        name={'Cláudio'}
      />
    </div>
  )
}

export default App