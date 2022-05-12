import './category-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const navigate = useNavigate();

    const selectCategoryHandler = () => {
      navigate(`/shop/${title}`);
    }

    return (
        <div className="category-container" onClick={selectCategoryHandler} >
        <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </div>
      </div> 
    )
}

export default CategoryItem;