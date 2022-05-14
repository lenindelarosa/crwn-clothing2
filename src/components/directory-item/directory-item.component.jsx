import { DirectoryItemContainer, BackgroundImage, Body} from './directory-item.styles';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const navigate = useNavigate();

    const selectCategoryHandler = () => {
      navigate(`/shop/${title}`);
    };

    return (
      <DirectoryItemContainer onClick={selectCategoryHandler} >
        <BackgroundImage style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <Body>
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </Body>
      </DirectoryItemContainer> 
    )
};

export default DirectoryItem;