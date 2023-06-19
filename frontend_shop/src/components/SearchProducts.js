import SingleProduct from './SingleProduct';
import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function SearchProducts() {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [products, setProducts]=useState([]);
    const [totalResult, setTotalResults] = useState(0);
    const {category_slug, category_id} = useParams();
    const {searchstring} = useParams();

    {/*useEffect(()=>{
        try {
            fetchData(baseUrl + '/search/' + searchstring);
        }
        catch(error) {
            console.log(error)
        }
    }, []);
    
    function fetchData(baseurl) {
        axios.get(baseurl)
        .then((data)=>{
            setProducts(data.results);
            setTotalResults(data.count);
        });
    }*/}

    useEffect(()=>{
        fetchData(baseUrl + 'search/' + searchstring);
    }, []);
    
    function fetchData(baseurl) {
        fetch(baseurl)
        .then((response)=>response.json())
        .then((data)=>{
            setProducts(data.results);
            setTotalResults(data.count);
        });
    }

    function changeUrl(baseurl) {
        fetchData(baseurl);
    }

    var links = [];
    var limit = 12;
    var totalLinks = totalResult / limit;
    for (let i = 1; i <= totalLinks; i++) {
        links.push(<li className="page-item"><Link onClick={()=>changeUrl(baseUrl + 'search/' + searchstring + '&page=' + i)} to={'?page=' + i} className="page-link">{i}</Link></li>);
    }

    return (
        <section className="container mt-4">
        <h3 className="mt-4 mb-4 text-center">Поиск</h3>
            <div className="row mb-4">
                {products.length !== 0 &&
                    products.map((product)=><SingleProduct product={product}/>)
                }
                {products.length === 0 &&
                    <h4 className="text-center" style={{"margin-top": "66px", "margin-bottom": "88px"}}>По вашему запросу товаров не найдено!</h4>
                }
            </div>
        </section>
    )
}

export default SearchProducts;
