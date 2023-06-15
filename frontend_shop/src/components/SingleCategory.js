import { Link } from 'react-router-dom';
import { transliterate as slugify } from 'transliteration';

function SingleCategory(props) {
    const styles = {
        card: {
            content: "", backgroundImage: "url(" + props.category.image + ")", "height" : "14vw", "background-size": "cover", "background-position": "center", "opacity": "0.8", "z-index": "-1"
        }
    };
    return (
        <div className="col-12 col-md-4 mb-2">
                <Link className="link-underline-dark" to={"/category/" + slugify(props.category.name_for_site.toLowerCase()) + "/" + props.category.id}>
                <div className="bg-image card" style={styles.card}>
                <div className="card-body">
                <h4 className="card-title">{props.category.name_for_site}</h4>
                </div>
                </div>
                </Link>
        </div>
    )
}

export default SingleCategory;
