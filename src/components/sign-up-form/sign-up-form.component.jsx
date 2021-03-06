import { useState } from "react";
import { createAuthUserWithEmailAndPassword, crearUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from './sign-up-form.styles.jsx'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(password!==confirmPassword) {
            alert('Passwords do not match! Please try again.')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await crearUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in use.');
            } else {
                console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value});
    }
    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>
                Sign up with your email and password.
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName}/>

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button type="submit" buttonType={BUTTON_TYPE_CLASSES.base}>Sign Up!</Button>
            </form>
        </SignUpContainer>
    )
};

export default SignUpForm;