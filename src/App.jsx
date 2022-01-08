import { Router } from "@reach/router";
import './App.css';
import Product from "./Components/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./Components/Cart";

function App() {
  return(
   <Router>
     <Product path='/' />
     <Cart path='/cart' />
   </Router>
  )
}

export default App;
