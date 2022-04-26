import { useState } from "react";
import Button from "../button/button.component";
import { auth, signInWithAccount } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

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
            const { user } = await signInWithAccount(auth, email, password);
            console.log(user);
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

    return (
        <div className="sign-up-container">
        <h2>I already have an account</h2>
        <span>
            Sign in with your email and password.
        </span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

            <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

            <Button type="submit">Sign Up!</Button>
        </form>
    </div>
    )
};

export default SignInForm;