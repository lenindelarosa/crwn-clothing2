import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.contexts';

import './category-display.styles.scss'
import ProductCard from '../../components/product-card/product-card.component';

const CategoryDisplay = () => {

const { category } = useParams();
const { categoriesMap } = useContext(CategoriesContext);
const [products, setProducts] = useState(categoriesMap[category]);

useEffect(() => {
    setProducts(categoriesMap[category]);
}, [category, categoriesMap]);

return(
    <>
        <div>
            <h2>
                <span className='category-display-title'>{category.toUpperCase()}</span>
            </h2>
        </div>

        <div className='category-display-container'>    
        {
            products && products        //safegard in case products is not loaded yet. 
            .map((product) => (
            <ProductCard key={product.id} product={product} />
            ))
        }
        </div>
    </>
)};

export default CategoryDisplay;