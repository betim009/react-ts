import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [pageTheme, setPageTheme] = useState<'dark' | 'light'>('dark');

  function toggleTheme() {
    setPageTheme(pageTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme: pageTheme, toggleTheme }}>
      <div className={`app ${pageTheme}`}>
        <Header />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
