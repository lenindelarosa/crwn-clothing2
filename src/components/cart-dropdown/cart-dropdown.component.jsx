import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartDropdownContainer, CartItems, EmtpyMessage } from './cart-dropdown.styles'

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
                {
                    cartItems.length ? (
                        cartItems.map((item) => (
                            <CartItem key={item.id} cartItem={item}/>
                        ))
                    ) : (
                        <EmtpyMessage>Your cart is empty.</EmtpyMessage>
                    )
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler} buttonType={BUTTON_TYPE_CLASSES.base}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;