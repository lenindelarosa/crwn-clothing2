import { CategoriesContainer } from './categories-menu.styles'
import DirectoryItem from '../directory-item/directory-item.component';

const CategoriesMenu = ({ categories }) => {

return(
      <CategoriesContainer>
      { categories.map((category) => (
        <DirectoryItem key={category.id} category={category}/>
      ))}
    </CategoriesContainer>   
)};

export default CategoriesMenu;