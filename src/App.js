import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductProvider from './Context/ProductProvider';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import TopRated from './Pages/TopRated';
import Navbar from './Share/Navbar/Navbar';



function App() {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/top-rated' element={<TopRated />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
}

export default App;
