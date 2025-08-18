import { useEffect, useState } from 'react';
import './Home.css';
import SingleProduct from './SingleProduct';
import SingleCategory from './SingleCategory';
import SingleCategoryLarger from './SingleCategoryLarger';

function Home() {
    const baseUrl = 'http://127.0.0.1:8000/api/';

    const [products, setProducts]=useState([]);
    useEffect(() => {
        fetchData(baseUrl + 'products');
    }, []);
    function fetchData(baseurl) {
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>setProducts(data.results));
    }

    const [categories, setCategories]=useState([]);
    useEffect(() => {
        fetchData1(baseUrl + 'categories/?level=1&status=Да');
    }, []);
    function fetchData1(baseurl) {
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>setCategories(data.results));
    }
    
    return (
    <main className="mt-4">
        <div className="container">
            <div className="row">
            {
                categories.slice(0, 3).map((category)=><SingleCategory category={category}/>)
            }
            </div>
            <div className="row mt-3">
            {
                categories.slice(3, 5).map((category)=><SingleCategoryLarger category={category}/>)
            }
            </div>
            <div className="row mt-3">
            {
                categories.slice(5, 8).map((category)=><SingleCategory category={category}/>)
            }
            </div>

            <h3 className="mt-4 mb-4 text-center">Новые поступления</h3>

            <div id="carouselNewProducts" className="carousel slide carousel-dark">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row mb-4">
                        {
                                products.slice(0, 4).map((product)=><SingleProduct product={product}/>)
                        }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mb-4">
                        {
                                products.slice(4, 8).map((product)=><SingleProduct product={product}/>)
                        }
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselNewProducts" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{"border-radius": "50%", border: "2px solid white", "margin-right": "10vw"}}></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselNewProducts" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{"border-radius": "50%", border: "2px solid white", "margin-left": "10vw"}}></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </main>
    )
}

export default Home;
