import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.contexts';

import './category-display.styles.scss'
import ProductCard from '../../components/product-card/product-card.component';

const CategoryDisplay = () => {

const { id } = useParams();
const { categoriesMap } = useContext(CategoriesContext);
const products = categoriesMap[id];

return(
    <>
        <h2>
            <span className='title'>{id.toUpperCase()}</span>
        </h2>
        <div className='category-display-container'>    
        {
            products
            .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
            ))
        }
        </div>
    </>
)};

export default CategoryDisplay;