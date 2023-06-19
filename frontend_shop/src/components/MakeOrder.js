import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext, CartContext } from '../Context';
import axios from 'axios';

function MakeOrder(props) {
    const userContext = useContext(UserContext);
    const {cartData, setCartData} = useContext(CartContext);
    const [formError, setFormError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [orderType, setOrderType] = useState({
        "flexRadioDefault": '',
        "comment": ''
    });

    if (userContext[0] !== 'true') {
        window.location.href = '/customer/login';
    }
    else {
        const baseUrl = 'http://127.0.0.1:8000/api/';
        console.log(cartData);

        var sum = 0;
        var sumDiscount = 0;
        cartData.map((item, index) => {
            sum += parseInt(item.product.price);
            sumDiscount += parseInt(item.product.discount);
        });

        const handleChange = (event) => {
            setOrderType({
                ...orderType,
                [event.target.name]: event.target.value
            })
          };

        const submitHandler = (event) => {
            const formData = new FormData();
            formData.append('user_id', userContext[2]);
            formData.append('user_cartNumber', cartData.length);
            formData.append('order_type', orderType.flexRadioDefault);
            formData.append('discount_sum', sum - sumDiscount);
            formData.append('total_sum', sumDiscount);
            formData.append('comment', orderType.comment);

            var previousCart = localStorage.getItem('cartData');
            formData.append('cart', previousCart);
    
            axios.post(baseUrl + 'customer/order', formData)
            .then(function(response) {
                if (response.data.bool === false) {
                    setFormError(true);
                    setErrorMsg(response.data.msg);
                }
                else {
                    var ele = document.getElementsByName("flexRadioDefault");
                    for(var i=0;i<ele.length;i++)
                        ele[i].checked = false;
                    setOrderType({
                        "flexRadioDefault": '',
                        "comment": ''
                    });
                    setFormError(false);
                    setSuccessMsg(response.data.msg);
                    clearCart();
                }
            })
            .catch(function(error) {
                console.log(error);
            })
        };
        console.log(orderType.flexRadioDefault);

        const buttonEnable = (orderType.flexRadioDefault !== '')

        const clearCart = () => {
            var previousCart = localStorage.getItem('cartData');
            var cartJson = JSON.parse(previousCart);
            cartJson.splice(0, cartJson.length);
            var cartString = JSON.stringify(cartJson);
            localStorage.setItem('cartData', cartString);
            setCartData(cartJson);
        }

        if (cartData.length === 0) {
            window.location.href = '/checkout';
        }

        return(
            <div className="container mt-4">
            <h3 className="mt-4 mb-4 text-center">Оформление заказа</h3>
            <div className="row">
                <div className="col-md-8 col-12 offset-2">
                    <div className="card">
                        <div className="card-body">
                            {successMsg &&
                                <p className="text-success">{successMsg}</p>
                            }
                            <form>
                            <div className="mb-3">
                                <label for="firstName" className="form-label">Имя</label>
                                <input type="text" name="first_name" value={userContext[3]} className="form-control" id="firstName" readonly/>
                            </div>
                            <div className="mb-3">
                                <label for="mobile" className="form-label">Телефон</label>
                                <input type="tel" name="mobile" placeholder="0(000)000-00-00" autoComplete="cc-number" inputMode="numeric" value={userContext[6]} className="form-control" id="mobile" readonly/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" name="email" value={userContext[5]} className="form-control" id="email" readonly/>
                            </div>
                            <p>Способ получения</p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value={'Самовывоз'} onChange={handleChange}/>
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Самовывоз
                                </label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value={'Доставка'} onChange={handleChange}/>
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Доставка
                                </label>
                            </div>
                            <div className="mb-3 mt-3">
                                <label for="mobile" className="form-label">Комментарий</label>
                                <textarea className="form-control" name="comment" value={orderType.comment} onChange={handleChange}/>
                            </div>
                            <button type="button" disabled={!buttonEnable} onClick={submitHandler} className="btn btn-success">Отправить заявку</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default MakeOrder;
