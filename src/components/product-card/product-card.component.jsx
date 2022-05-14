import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {ProductCardContainer, FooterContainer} from './product-card.styles.jsx'
import Button from '../button/button.component'

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    
    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <FooterContainer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </FooterContainer>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
)};

export default ProductCard;