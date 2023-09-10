import Books from './components/Books';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <div className="container-md">
        <Books />
      </div>
      <Footer />
    </>
  )
}

export default App
