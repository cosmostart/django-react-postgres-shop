import SingleProduct from './SingleProduct';
import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

function CategoryProducts() {
    const baseUrl = 'http://127.0.0.1:8000/api/';
    const [products, setProducts]=useState([]);
    const [totalResult, setTotalResults] = useState(0);
    const {category_slug, category_id} = useParams();

    useEffect(()=>{
        fetchData(baseUrl + 'products/?category=' + category_id);
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
        links.push(<li className="page-item"><Link onClick={()=>changeUrl(baseUrl + 'products/?category=' + category_id + '&page=' + i)} to={'?page=' + i} className="page-link">{i}</Link></li>);
    }

    function translit(word) {
        const converter = {
          'sch': 'щ',
      
          'yo': 'ё', 'zh': 'ж', 'ch': 'ч', 'sh': 'ш', 'yu': 'ю', 'tya': 'тья', 'ya': 'я',
      
          'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
          'e': 'е', 'z': 'з', 'i': 'и', 'y': 'й', 'k': 'к',
          'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 'p': 'п',
          'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'f': 'ф',
          'h': 'х', 'c': 'ц', 'y': 'ы',
        };
      
        for (const [key, value] of Object.entries(converter)) {
          word = word.replaceAll(key, value);
        }
      
        return word;
      }

    return (
        <section className="container mt-4">
        <h3 className="mt-4 mb-4 text-center">{translit(category_slug).charAt(0).toUpperCase() + translit(category_slug).slice(1)}</h3>
            <div className="row mb-4">
                {products.length !== 0 &&
                    products.map((product)=><SingleProduct product={product}/>)
                }
                {products.length === 0 &&
                    <h4 className="text-center" style={{"margin-top": "66px", "margin-bottom": "38px"}}>В данной категории нет товаров!</h4>
                }
            </div>
            <nav aria-label="Page navigation example">
            <ul className="pagination">
                {links}
            </ul>
            </nav>
        </section>
    )
}

export default CategoryProducts;
