import instagram from './images/instagram.svg';
import whatsapp from './images/whatsapp.svg';
import line from './images/line.svg';
import search from './images/search.svg';
import heart from './images/heart.svg';
import humanTop from './images/humanTop.svg';
import humanBottom from './images/humanBottom.svg';
import cartTop from './images/cartTop.svg';
import cartBottom from './images/cartBottom.svg';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext, CartContext } from '../Context';

function Header() {
    const userContext = useContext(UserContext);
    const {cartData, setCartData} = useContext(CartContext);
    const [searchString, setSearchString] = useState({
      'search': ''
    });

    var sumDiscount = 0;
    cartData.map((item, index) => {
        sumDiscount += parseInt(item.product.discount);
    });

    const handleChange = (event) => {
      setSearchString({
          ...searchString,
          [event.target.name]: event.target.value
      })
    };

    const searchProduct = () => {
      window.location.href = '/search/' + searchString.search;
    }

    return (
      <>
      <nav className="navbar navbar-expand bg-secondary text-light d-flex flex-row justify-content-between" style={{fontSize: 1 + 'em', paddingRight: 5 + '%', paddingLeft: 5 + '%'}}>
      <div className="d-flex flex-row justify-content-around" style={{width: 30 + '%'}}>
        <a className="nav-link" href="#">Контакты</a>
        <a className="nav-link" href="#">О нас</a>
        <a className="nav-link" href="#">Доставка</a>
      </div>
      <div className="d-flex flex-row justify-content-around" style={{width: 30 + '%'}}>
        <div className="d-flex flex-row align-items-center" style={{width: 20 + '%'}}>
          <img src={instagram} className="rounded" style={{paddingRight: 15 + '%', paddingTop: 5 +'%', width: 50 + 'px', height: 50 + '%'}}></img>
          <a className="nav-link" href="#" style={{width: 30 + '%'}}>logo</a>
        </div>
        <div className="d-flex flex-row align-items-center" style={{width: 20 + '%'}}>
          <img src={whatsapp} className="rounded" style={{paddingRight: 15 + '%', paddingTop: 5 +'%', width: 50 + '%', height: 50 + '%'}}></img>
          <a className="nav-link" href="#" style={{width: 30 + '%'}}>Whatsapp</a>
        </div>
      </div>
    </nav>
    <nav className="navbar container-fluid d-flex flex-row justify-content-around align-items-center border-bottom border-secondary border-opacity-10" style={{width: "90vw"}}>
      <Link to="/" className="text-secondary" style={{fontSize: 2 + 'em', textDecoration: 'none'}}>logo</Link>
      <form className="d-flex flex-row">
        <div>
        <button type="button" className="btn btn-secondary rounded-0 d-flex flex-row align-items-center me-2" style={{width: "120px"}}>
          <div className="d-flex flex-column" style={{marginRight: 10 + '%'}}>
            <img src={line} className="rounded" style={{paddingBottom: 10 + '%'}}></img>
            <img src={line} className="rounded" style={{paddingBottom: 10 + '%'}}></img>
            <img src={line} className="rounded"></img>
          </div>
          <p className="text-light" style={{margin: 0, textTransform: 'uppercase'}}>Каталог</p>
        </button>
        </div>
          <input type="search" name="search" onChange={handleChange} placeholder="Поиск по категории, названию товара, артиклу" className="form-control rounded-0" style={{width:"30vw"}}></input>
          <button type="button" onClick={searchProduct} className="btn rounded-0">
            <img src={search}></img>
          </button>
      </form>
      <div className="d-flex flex-row justify-content-between text-secondary align-items-center" style={{width: 30 + '%'}}>
        <img src={heart}></img>
        <a className="nav-link" href="#">Избранное</a>
        <div className="d-flex flex-column align-items-center">
          <img src={humanTop}></img>
          <img src={humanBottom}></img>
        </div>
        <li className="nav-item dropdown" style={{"list-style-type": "none"}}>
        {userContext[0] !== 'true' &&
          <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">Вход/Регистрация</a>
        }
        {userContext[0] === 'true' &&
          <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">{userContext[1]}</a>
        }
        <ul className="dropdown-menu">
          {userContext[0] !== 'true' &&
            <>
            <li><Link className="dropdown-item" to="/customer/register">Регистрация</Link></li>
            <li><Link className="dropdown-item" to="/customer/login">Войти</Link></li>
            </>
          }
          {userContext[0] === 'true' &&
            <>
            <li><Link className="dropdown-item" to="/customer/logout">Выйти</Link></li>
            </>
          }
        </ul>
        </li>
        <div className="d-flex flex-column align-items-center">
          <img src={cartTop}></img>
          <img src={cartBottom}></img>
        </div>
        <Link to="/checkout" className="nav-link d-flex flex-row align-items-center" style={{margin: 0}}>{sumDiscount} &#8381; / {cartData.length} шт.</Link>
      </div>
    </nav>
    </>
    )
}

export default Header;
