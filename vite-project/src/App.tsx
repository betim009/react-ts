import Greeting from './components/Greeting';
import LuckyNumbers from './components/LuckyNumbers';
import PastResults from './components/PastResults';

import './App.css';

function App() {
  return (
    <>
      <Greeting person={{ firstName: 'Alberto', lastName: 'Couto' }} />
      <LuckyNumbers />
      <PastResults />
    </>
  );
}

export default App;
