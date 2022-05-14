import { useState, useContext } from "react";
import Button from "../button/button.component";
import { 
    signInWithAccount, 
    signInWithGooglePopup, 
    crearUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer, H2} from './sign-in-form.styles.jsx'

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const { user } = await signInWithAccount(email, password);
        }
        catch(error){
            if(error.code === 'auth/wrong-password'){
                alert('Invalid username and password combination. ');
            } else {
                console.log(error)
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value});
    };

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await crearUserDocumentFromAuth(user);
    };

    return (
        <SignInContainer>
        <H2>I already have an account</H2>
        <span>
            Sign in with your email and password.
        </span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>
            <ButtonsContainer>
                <Button type="submit">Sign In</Button>
                <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button>
            </ButtonsContainer>
        </form>
    </SignInContainer>
    )
};

export default SignInForm;