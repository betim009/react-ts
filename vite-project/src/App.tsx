import './App.css'
import ThemeContext from './context/ThemeContext'


function App() {
  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      <div>
        <h1>Hello World!</h1>
      </div>
    </ThemeContext.Provider>
  )
}

export default App