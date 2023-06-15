import logo from '../logo.svg';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail(props) {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [productData, setProductData]=useState([]);
    const {product_slug, product_id} = useParams();

    useEffect(()=>{
        fetchData(baseUrl + 'product/' + product_id);
    }, []);

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
        <svg viewBox="0 0 80 80" width="80" height="80">
            <circle class="circle" cx="20" cy="20" r="18" style={{"fill": productData.other_colors?.[i].color, stroke: "#000000", "stroke-width": "0.0117em"}}/>
        </svg>)
    }

    var notNullPhotos = []
    if (productData.product_imgs?.[0].image2 != null) {
        notNullPhotos.push(
            <div class="carousel-item">
            <img src={productData.product_imgs?.[0].image2} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image3 != null) {
        notNullPhotos.push(
            <div class="carousel-item">
            <img src={productData.product_imgs?.[0].image3} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image4 != null) {
        notNullPhotos.push(
            <div class="carousel-item">
            <img src={productData.product_imgs?.[0].image4} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image5 != null) {
        notNullPhotos.push(
            <div class="carousel-item">
            <img src={productData.product_imgs?.[0].image5} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image6 != null) {
        notNullPhotos.push(
            <div class="carousel-item">
            <img src={productData.product_imgs?.[0].image6} className="img-thumbnail" alt="..."/>
            </div>
        )
    }
    if (productData.product_imgs?.[0].image7 != null) {
        notNullPhotos.push(
            <div class="carousel-item">
            <img src={productData.product_imgs?.[0].image7} className="img-thumbnail" alt="..."/>
            </div>
        )
    }


    var price;
    if (productData.discount_price != null) {
        price = <h5 className="card-title"><span className="text-decoration-line-through text-muted">{productData.price} руб</span> {productData.discount_price} руб</h5>
    }
    else {
        price = <h5 className="card-title">{productData.price} руб</h5>
    }

    return (
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                <div id="carouselProductDetail" class="carousel slide carousel-dark">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={productData.product_imgs?.[0].image1} className="img-thumbnail" alt="..."/>
                    </div>
                    {notNullPhotos}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselProductDetail" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselProductDetail" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                </div>
                <div className="col-8">
                    <h3>{productData.name_for_site}</h3>
                    <p>Артикул: {productData.article}</p>
                    <p>{productData.description}</p>
                    <h5>РАЗМЕР:</h5>
                    <h5>ЦВЕТ:</h5>
                    <div className="col">
                    <svg viewBox="0 0 80 80" width="80" height="80">
                        <circle class="circle" cx="20" cy="20" r="18" style={{"fill": productData.color?.color, stroke: "#000000", "stroke-width": "0.1175em"}}/>
                    </svg>
                    {colors}
                    </div>
                    {price}
                    <p className="mt-3">
                    <button title="Add to Cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus"></i>В корзину</button>
                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1"><i className="fa-solid fa-heart"></i>Избранное</button>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail;
