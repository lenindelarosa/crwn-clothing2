import { CheckoutItemContainer, ImageContainer, BaseSpan, Value, ButtonContainer, Quantity, Arrow } from './checkout-item.styles'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem;
    const { delItemFromCart, addItemToCart, removeItemFromCart, cartTotal } = useContext(CartContext);

    const removeItemHandler = () => removeItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const deleteItemHandler = () => delItemFromCart(cartItem);

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            
            <Quantity>
                <Arrow onClick={deleteItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <ButtonContainer onClick={removeItemHandler}>&#10005;</ButtonContainer>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;