import { useContext } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    const totalItems = cartItems.reduce((acc, item) => 
        acc + item.quantity, 0
    );

    return (
        <div className='cart-icon-container' onClick={toogleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{totalItems}</span>
        </div>
    );
};

export default CartIcon;