import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    return(
        <div className='checkout-container'>
            {cartItems.map((item) => (
                <CheckoutItem key={item.id} cartItem={item}/>
            ))}

        </div>
    );
};

export default Checkout;