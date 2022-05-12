import './category-preview.styles.scss'
import ProductCard from '../product-card/product-card.component';
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({title, products}) => {

const navigate = useNavigate();
const categorySelectHandler = () => {
    navigate(`/shop/${title}`);
}

return(
    <div className='category-preview-container'>
        <h2>
            <span className='title' onClick={categorySelectHandler}>{title.toUpperCase()}</span>
        </h2>
        <div className='preview'>
            {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
                ))}
        </div>
    </div>
)
};

export default CategoryPreview;