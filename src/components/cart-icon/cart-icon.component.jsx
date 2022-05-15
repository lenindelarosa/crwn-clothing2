import { useContext } from 'react';
import { CartIconContainer, IconContainer, ItemCount} from './cart-icon.styles';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);


    return (
        <CartIconContainer onClick={toogleIsCartOpen}>
            <IconContainer>
                <ShoppingIcon className='shopping-icon' />   
            </IconContainer>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;