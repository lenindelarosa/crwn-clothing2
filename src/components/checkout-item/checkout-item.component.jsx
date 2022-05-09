import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    const { delItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

    const handleRemoveItem = () => removeItemFromCart(cartItem);

    const handleAddItem = () => addItemToCart(cartItem);

    const handleDelItem = () => delItemFromCart(cartItem);

    return(
        <div className='checkout-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <span className='name'>{name}</span>
            <div>
                <span className='arrow' onClick={handleDelItem}>{'<  '}</span>
                <span className='quantity'>{quantity}</span>
                <span className='arrow' onClick={handleAddItem}>{'  >'}</span>
            </div>
            
            <span className='price'>{price}</span>
            <span className='remove' onClick={handleRemoveItem}>{'X'}</span>
        </div>
    );
};

export default CheckoutItem;