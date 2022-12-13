import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Login from './Login';
import { PageNavigation } from './PageNavigation';
import ShopProvider from './context/shopProvider';
// import Products from './Products';

function App() {
  return (
    <ShopProvider>
    <div className="App">
      <header className="App-header">
      <Router>
        <PageNavigation></PageNavigation>
        <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/products' element={< Products />}></Route>
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/cart' element={< Login />}></Route>
        </Routes>
      </Router>

      </header>
    </div>
    </ShopProvider>
  );
}

export default App;
