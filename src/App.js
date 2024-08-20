import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import ShopCategory from './Pages/ShopCategory';
import mensBanner from './Components/Assets/banner_mens.png'
import womensBanner from './Components/Assets/banner_women.png'
import kidsBanner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <BrowserRouter>
        <Navbar />
        <div className='navbar-margin' />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={mensBanner} category='men' />} />
          <Route path='/womens' element={<ShopCategory banner={womensBanner} category='women' />} />
          <Route path='/kids' element={<ShopCategory banner={kidsBanner} category='kid' />} />
          <Route path='/product' element={<Product/>}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
