import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartDropdownContainer, CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        setIsCartOpen(false);
        navigate('/checkout')
    };
    return(
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                ))}
            </CartItems>
            <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;