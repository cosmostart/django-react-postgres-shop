import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import { transliterate as slugify } from 'transliteration';

function SingleProduct(props) {
    var image = logo
    if (props.product.product_imgs?.[0]?.image1 != null) {
        image = props.product.product_imgs?.[0]?.image1;
    }
    return (
        <div className="col-12 col-md-3 mb-2">
            <div className="card">
            <Link className="text-decoration-none" to={"/product/" + slugify(props.product.name_for_site.toLowerCase()) + "/" + props.product.id}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.product.name_for_site}</h5>
            <h5 className="card-title text-muted">{props.product.price} &#8381;</h5>
            </div>
            </Link>
            <div className="card-footer">
            <button title="Add to Cart" className="btn btn-success btn-sm"><i className="fa-solid fa-cart-plus"></i></button>
            <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1"><i className="fa-solid fa-heart"></i></button>
            </div>
            </div>
        </div>
    )
}

export default SingleProduct;
