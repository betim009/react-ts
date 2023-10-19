import { useSelector } from 'react-redux';

type RootState = {
  count: number;
};

function App() {
  // const rootState = useSelector((state: RootState) => state);
  const count = useSelector((state: RootState) => state.count);

  return (
    <div>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button>Incrementa 1</button>
      <button>Incrementa 5</button>
    </div>
  );
}

export default App;