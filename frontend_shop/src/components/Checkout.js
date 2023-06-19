import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext, CartContext } from '../Context';

function Checkout(props) {
    const [productData, setProductData]=useState([]);
    const [cartButtonClickStatus, setCartButtonClickStatus]=useState(false);
    const userContext = useContext(UserContext);
    const {cartData, setCartData} = useContext(CartContext);

    const cartRemoveButtonHandler = (index) => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.splice(index, 1);
        var cartString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString);
        setCartButtonClickStatus(false);
        setCartData(cartJson);
    }
    console.log(cartData)

    var sum = 0;
    var sumDiscount = 0;
    var howMany = 0
    cartData.map((item, index) => {
        sum += parseInt(item.product.price);
        sumDiscount += parseInt(item.product.discount);
        howMany = index + 1;
    });

    return (
        <div className="container mt-4">
        <h3 className="mt-4 mb-4 text-center">Корзина</h3>
        {cartData.length !== 0 &&
                    <div className="row mb-4">
                    <div className="col-md-12 col-12">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Товар</th>
                                        <th>Цвет</th>
                                        <th>Размер</th>
                                        <th>Цена</th>
                                        <th>Цена со скидкой</th>
                                        <th>Действие</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartData.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <Link><img src={item.product.image} className="img-thumbnail" width="80"/></Link>
                                                        <p>{item.product.title}</p>
                                                    </td>
                                                    <td>{item.product.color}</td>
                                                    <td>{item.product.size}</td>
                                                    <td><span className="text-decoration-line-through text-muted">{item.product.price} &#8381;</span></td>
                                                    <td>{item.product.discount} &#8381;</td>
                                                    <td>
                                                        <button title="Удалить" type="button" onClick={() => cartRemoveButtonHandler(index)} className="btn btn-secondary btn-sm"><i className="fa-solid fa-xmark"></i></button>
                                                        <button title="В избранное" className="btn btn-danger btn-sm ms-1"><i className="fa-solid fa-heart"></i></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th>Сумма скидок</th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>{sum - sumDiscount} &#8381;</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th><h3>Итого {howMany} шт.</h3></th>
                                        <th></th>
                                        <th></th>
                                        <th><h3 className="text-decoration-line-through text-muted">{sum} &#8381;</h3></th>
                                        <th><h3>{sumDiscount} &#8381;</h3></th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td colSpan="6" align="right">
                                            <Link to="/make-order" className="btn btn-success">Оформить заказ</Link>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
        }
        {cartData.length === 0 &&
            <h4 className="text-center" style={{"margin-top": "88px", "margin-bottom": "88px"}}>В корзине нет товаров!</h4>
        }
        </div>
    )
}

export default Checkout;
