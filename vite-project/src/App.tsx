import './App.css';
import data from './data/data';

import ProductsList from './components/ProductsList';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <ProductsList>
        {
          data.map((product) => (
            <Product key={product.id} productInfo={product} />
          ))
        }
      </ProductsList>
    </div>
  )
}

export default App;