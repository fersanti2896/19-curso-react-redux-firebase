import { registerUserWithEmail, singWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSingIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        /* Se llama la función de Firebase para la autenticación con Google */
        const result = await singWithGoogle();
        
        if( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) )
    }
}

export const startCreateUserWithPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        /* Se llama la función de Firebase para la autenticación por JournalApp */
        const resp = await registerUserWithEmail({ email, password, displayName });
        
        console.log(resp);
    }
}