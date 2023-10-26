import './App.css'
import Footer from './components/Footer'
import { useState } from 'react';
import ThemeContext from './context/ThemeContext'
import Header from './components/Header';


function App() {
  const [pageTheme, setPageTheme] = useState<'dark' | 'light'>('dark');

  function toggleTheme() {
    setPageTheme(pageTheme === 'dark' ? 'light' : 'dark');
  }
  return (
    <ThemeContext.Provider value={{ theme: pageTheme, toggleTheme }}>
      <div>
        <h1>Hello World!</h1>
        <Header />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App