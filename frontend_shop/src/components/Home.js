import { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';
import SingleCategory from './SingleCategory';
import SingleCategoryLarger from './SingleCategoryLarger';

function Home() {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [products, setProducts]=useState([]);

    useEffect(() => {
        fetchData(baseUrl + 'products/?fetch_limit=8');
    }, []);

    function fetchData(baseurl) {
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>setProducts(data.results));
    }

    const [categories, setCategories]=useState([]);
    useEffect(() => {
        fetchData1(baseUrl + 'categories/?fetch_limit=8');
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

            <div id="carouselNewProducts" class="carousel slide carousel-dark">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="row mb-4">
                        {
                                products.slice(0, 4).map((product)=><SingleProduct product={product}/>)
                        }
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="row mb-4">
                        {
                                products.slice(4, 8).map((product)=><SingleProduct product={product}/>)
                        }
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselNewProducts" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style={{"border-radius": "50%", border: "2px solid white", "margin-right": "10vw"}}></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselNewProducts" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style={{"border-radius": "50%", border: "2px solid white", "margin-left": "10vw"}}></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/*<div id="carouselExampleControls" className="carousel slide bg-black text-white" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <blockquote className="blockquote text-center">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
                </div>
                <div className="carousel-item">
                <blockquote className="blockquote text-center">
            <p className="mb-0">tttttt, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
                </div>
                <div className="carousel-item">
                <blockquote className="blockquote text-center">
            <p className="mb-0">kkkkk. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
                    </div>*/}
        </div>
    </main>
    )
}

export default Home;
