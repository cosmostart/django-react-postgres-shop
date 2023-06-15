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

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
        <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>}/>
        <Route path='/customer/register' element={<Register/>}/>
        <Route path='/customer/login' element={<Login/>}/>
        <Route path='/customer/logout' element={<Logout/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
