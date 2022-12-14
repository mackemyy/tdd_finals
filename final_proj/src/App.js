import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Cart from"./components/Cart";
import About from "./components/About";
import Products from "./components/Products";
import Login from "./components/Login";
import { CartState } from './components/Context';
import Home from './components/Home';


function App() {
const {cart}=CartState ();



  return (
<BrowserRouter>

    <div className="App">


  <header className="App-header">
    <h1> bakery shop project</h1>
      <Link to ="/"> Home </Link>
      <Link to="/about"> about</Link>
      <Link to="/products"> Products</Link>
      <Link to="/cart"> Cart({cart.length})</Link>

      <Link to="/login"> Login</Link>

   
      <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/products" element={<Products/>}/>
    <Route path ="/cart" element={<Cart/>}/>
    <Route path ="/login" element={<Login/>}/>
   
      </Routes>
    </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
