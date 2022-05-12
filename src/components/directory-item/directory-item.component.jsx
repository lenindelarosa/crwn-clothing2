import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const navigate = useNavigate();

    const selectCategoryHandler = () => {
      navigate(`/shop/${title}`);
    }

    return (
        <div className="directory-item-container" onClick={selectCategoryHandler} >
        <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="directory-item-body-container">
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </div>
      </div> 
    )
}

export default DirectoryItem;