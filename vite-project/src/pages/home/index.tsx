import { useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-title">
        <h1>Coffeeteria</h1>
      </div>
      <main>
        <button onClick={() => navigate('/coffees')}>
          Conheça nossos produtos
        </button>
      </main>
    </div>
  );
}

export default Home;
