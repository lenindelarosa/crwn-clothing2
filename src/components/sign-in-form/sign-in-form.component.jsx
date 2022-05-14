import { useState } from "react";
import Button from "../button/button.component";
import { 
    signInWithAccount, 
    signInWithGooglePopup, 
    crearUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx'
import { useNavigate } from 'react-router-dom'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const navigate = useNavigate();

    // const resetFormFields = () => {
    //     setFormFields(defaultFormFields);
    // };

    const submitHandler = async(event) => {
        event.preventDefault();
        try {
            await signInWithAccount(email, password);
            navigate('/shop');
        }
        catch(error){
            if(error.code === 'auth/wrong-password'){
                alert('Invalid username and password combination. ');
            } else {
                console.log(error)
            }
        }
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value});
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await crearUserDocumentFromAuth(user);
    };

    return (
        <SignInContainer>
        <h2>I already have an account</h2>
        <span>
            Sign in with your email and password.
        </span>
        <form onSubmit={submitHandler}>
            <FormInput label="Email" type="email" required onChange={onChangeHandler} name="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={onChangeHandler} name="password" value={password}/>
            <ButtonsContainer>
                <Button type="submit">Sign In</Button>
                <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button>
            </ButtonsContainer>
        </form>
    </SignInContainer>
    )
};

export default SignInForm;