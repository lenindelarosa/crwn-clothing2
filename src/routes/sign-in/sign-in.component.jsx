import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import { 
    auth,
    signInWithGooglePopup, 
    crearUserDocumentFromAuth, 
    signInWithGoogleRedirect 
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    // ## This piece of code is to use when using google redirect, maintain the user information with the reloading of the page##
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     if(response){
    //         const userDocRef = await crearUserDocumentFromAuth(response.user);
    //     }
    //     console.log(response);
    // }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await crearUserDocumentFromAuth(user);
    };


    return (
        <div>
            <h1>This is the signin Page</h1>
            <button onClick={logGoogleUser}>
                Sign In With Google
            </button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign In With Google Redirect
            </button> */}
        </div>
    );
};

export default SignIn;