import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useContext, Fragment } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return(
        <Fragment>
            <div className='checkout-container'>
                {cartItems.map((item) => (
                    <CheckoutItem key={item.id} cartItem={item}/>
                ))}
            </div>
            <div className='totalprice'>TOTAL: {cartTotal}</div>
        </Fragment>
    );
};

export default Checkout;