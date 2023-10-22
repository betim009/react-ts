import { useSelector, useDispatch } from 'react-redux';
import { action } from './redux/actions'


type RootState = {
  count: number;
};

function App() {
  // const rootState = useSelector((state: RootState) => state);
  const count = useSelector((state: RootState) => state.count);
  // console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(action)}>Incrementa 1</button>
      <button>Incrementa 5</button>
    </div>
  );
}

export default App;