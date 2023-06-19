import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import CategoryProducts from './components/CategoryProducts';
import ProductDetail from './components/ProductDetail';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Checkout from './components/Checkout';
import { CartContext } from './Context';
import { useState } from 'react';
import MakeOrder from './components/MakeOrder';
import SearchProducts from './components/SearchProducts';
import NotFound from './components/NotFound';

const checkCart = localStorage.getItem('cartData');

function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  return (
    <CartContext.Provider value={{cartData, setCartData}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
        <Route path='/customer/register' element={<Register/>}/>
        <Route path='/customer/login' element={<Login/>}/>
        <Route path='/customer/logout' element={<Logout/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/make-order' element={<MakeOrder/>}/>
        <Route path='/search/:searchstring' element={<SearchProducts/>}/>
        <Route path='/search/' element={<SearchProducts/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </CartContext.Provider>
  );
}

export default App;
