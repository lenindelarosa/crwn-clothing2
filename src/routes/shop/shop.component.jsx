import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import CategoryDisplay from '../category-display/category-display.component';
import './shop.styles.scss'

const Shop = () => {
    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path='/:id' element={<CategoryDisplay />}/>
        </Routes>
    );
};

export default Shop;