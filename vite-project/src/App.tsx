import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CoffeeList from './pages/CoffeList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coffees" element={<CoffeeList />} />
    </Routes>
  )
}

export default App;
