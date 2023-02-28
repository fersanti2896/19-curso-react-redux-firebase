import { singWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSingIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        /* Se llama la función de Firebase para la autenticación con Google */
        const result = await singWithGoogle()
        console.log(result)
    }
}