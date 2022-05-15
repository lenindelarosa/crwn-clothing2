import { CartItemContainer, BaseSpan, ItemDetails } from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem;
    return(
    <CartItemContainer>
        <img src={imageUrl} alt={`${name}`} />
        <ItemDetails>
            <BaseSpan>{name}</BaseSpan>
            <BaseSpan>{quantity} x ${price}</BaseSpan>
        </ItemDetails>
    </CartItemContainer>
    )
};

export default CartItem;