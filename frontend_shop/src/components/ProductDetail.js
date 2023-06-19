import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { UserContext, CartContext } from '../Context';

function ProductDetail(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [productData, setProductData]=useState([]);
    const {product_slug, product_id} = useParams();
    const [cartButtonClickStatus, setCartButtonClickStatus]=useState(false);
    const {cartData, setCartData} = useContext(CartContext);

    useEffect(()=>{
        fetchData(baseUrl + 'product/' + product_id);
        checkProductInCart(product_id);
    }, []);

    function checkProductInCart(product_id) {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        if (cartJson != null) {
            cartJson.map((cart) => {
                if (cart !== null && cart.product.id === product_id) {
                    setCartButtonClickStatus(true);
                }
            });
        }
    }

    function fetchData(baseurl) {
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>{
            setProductData(data);
        });
    }

    var colors = []
    for (let i = 0; i < productData.other_colors?.length; i++) {
        colors.push(
        <a href=""><svg viewBox="0 0 80 80" width="80" height="80">
            <circle className="circle" cx="20" cy="20" r="18" style={{"fill": productData.other_colors?.[i].color, stroke: "#000000", "stroke-width": "0.0117em"}}/>
        </svg></a>)
    }

    var notNullPhotos = []
    if (productData.product_imgs?.[0].image2 != null) {
        notNullPhotos.push(
            <div className="carousel-item">
            <img src={productData.product_imgs?.[0].image2} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image3 != null) {
        notNullPhotos.push(
            <div className="carousel-item">
            <img src={productData.product_imgs?.[0].image3} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image4 != null) {
        notNullPhotos.push(
            <div className="carousel-item">
            <img src={productData.product_imgs?.[0].image4} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image5 != null) {
        notNullPhotos.push(
            <div className="carousel-item">
            <img src={productData.product_imgs?.[0].image5} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image6 != null) {
        notNullPhotos.push(
            <div className="carousel-item">
            <img src={productData.product_imgs?.[0].image6} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image7 != null) {
        notNullPhotos.push(
            <div className="carousel-item">
            <img src={productData.product_imgs?.[0].image7} className="img-thumbnail" alt="..."/>
            </div>
        )
    }


    var price;
    if (productData.discount_price != null) {
        price = <h5 className="card-title"><span className="text-decoration-line-through text-muted">{productData.price} &#8381;</span> {productData.discount_price} &#8381;</h5>
    }
    else {
        price = <h5 className="card-title">{productData.price} &#8381;</h5>
    }

    const cartAddButtonHandler = () => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        var cartData = {
            'product': {
                'id': productData.id,
                'image': productData.product_imgs?.[0].image1,
                'title': productData.name_for_site,
                'color': productData.color?.name,
                'size': optionVal,
                'price': productData.price,
                'discount': productData.discount_price
            },
            'user': {
                id: '1'
            }
        }
        if (cartJson != null) {
            cartJson.push(cartData);
            var cartString = JSON.stringify(cartJson);
            localStorage.setItem('cartData', cartString);
            setCartData(cartJson);
        }
        else {
            var newCartList = [];
            newCartList.push(cartData);
            var cartString = JSON.stringify(newCartList);
            localStorage.setItem('cartData', cartString);
        }
        setCartButtonClickStatus(true);
    }

    const cartRemoveButtonHandler = () => {
        var previousCart = localStorage.getItem('cartData');
        var cartJson = JSON.parse(previousCart);
        cartJson.splice(cartJson.length - 1, 1);
        var cartString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString);
        setCartButtonClickStatus(false);
        setCartData(cartJson);
    }

    var options = []
    for (let i = 0; i < productData.sizes?.length; i++) {
        options.push(
            <option>{productData.sizes?.[i].size}</option>
        )
    }

    var optionVal = "Не выбрано";
    const changeOptionVal = (val) => {
        optionVal = val;
        console.log(optionVal)
    }

    const openModule = (event) => {
        if (optionVal !== "Не выбрано") {
            cartAddButtonHandler()
        }
        else {
            console.log(optionVal)
            
        }
    }
    

    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                <div id="carouselProductDetail" className="carousel slide carousel-dark">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={productData.product_imgs?.[0].image1} className="img-thumbnail" alt="..."/>
                    </div>
                    {notNullPhotos}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselProductDetail" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselProductDetail" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                </div>
                <div className="col-8">
                    <h3>{productData.name_for_site}</h3>
                    <p>Артикул: {productData.article}</p>
                    <p style={{"text-align":"justify"}}>{productData.description}</p>
                    <h6>РАЗМЕР:</h6>
                    <div className="relative">
                        <select onChange={e => changeOptionVal(e.target.value)} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                            <option>Не выбрано</option>
                            {options}
                        </select>
                    </div>
                    <p>
                    Не можете подобрать размер? <a className="text-black" href="https://dzen.ru/?clid=9403&yredirect=true">Запишитесь на примерку</a>
                    </p>
                    <h6>ЦВЕТ:</h6>
                    <div className="col">
                    <a href=""><svg viewBox="0 0 80 80" width="80" height="80">
                        <circle className="circle" cx="20" cy="20" r="18" style={{"fill": productData.color?.color, stroke: "#000000", "stroke-width": "0.1175em"}}/>
                    </svg></a>
                    {colors}
                    </div>
                    {price}
                    <p className="mt-3">
                    {!cartButtonClickStatus &&
                        <button title="В корзину" type="button" onClick={(e) => openModule(e)} className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus"></i> В корзину</button>
                    }
                    {cartButtonClickStatus &&
                        <button title="Удалить" type="button" onClick={cartRemoveButtonHandler} className="btn btn-secondary btn-sm"><i className="fa-solid fa-xmark"></i> В корзине</button>
                    }
                    <button title="В избранное" className="btn btn-danger btn-sm ms-1"><i className="fa-solid fa-heart"></i> В избранное</button>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail;
