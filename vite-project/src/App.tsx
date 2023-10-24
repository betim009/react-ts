import { useSelector, useDispatch } from 'react-redux';
import { actionCreator, clickCounter } from './redux/actions'


type RootState = {
  count: number;
  click: number
};

function App() {
  // const rootState = useSelector((state: RootState) => state);
  const count = useSelector((state: RootState) => state);
  // console.log(count);
  const dispatch = useDispatch();

  const handleClick = (count = 1) => {
    dispatch(actionCreator(count))
    dispatch(clickCounter());
  };

  return (
    <div>
      <h1>Contador</h1>
      <h2>{count.count}</h2>

      <h1>Clicks</h1>
      <h2>{count.click}</h2>

      <button onClick={() => handleClick()}>Incrementa 1</button>
      <button onClick={() => handleClick(5)}>Incrementa 5</button>
    </div>
  );
}

export default App;