import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.contexts';

import { CategoryDisplayContainer, Title} from './category-display.styles'
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
        <Title>{category.toUpperCase()}</Title>

        <CategoryDisplayContainer>    
        {
            products && products        //safegard in case products is not loaded yet. 
            .map((product) => (
            <ProductCard key={product.id} product={product} />
            ))
        }
        </CategoryDisplayContainer>
    </>
)};

export default CategoryDisplay;