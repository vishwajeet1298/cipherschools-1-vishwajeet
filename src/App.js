
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductsBox from './components/ProductsBox/ProductsBox';
import Products from './components/ProductsBox/Products/Products';


function App() {
  return (
    <div className="App">
      <Navbar />
       <ProductsBox />
       {/* <Products /> */}

    </div>
  );
}

export default App;
