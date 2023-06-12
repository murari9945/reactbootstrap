import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import Nav from './Components/Nav'

function App() {
  return (
    <div>
    <Nav />
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <Product />
      </div>
    </div>
  </div>
  );
}

export default App;
