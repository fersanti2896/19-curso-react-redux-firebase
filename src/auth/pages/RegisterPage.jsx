import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreateUserWithPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ ( value ) => value.includes('@'), 'El correo debe tener un @.'],
    password: [ ( value ) => value.length >= 6, 'La contraseña debe tener más de 6 caracteres.'],
    displayName: [ ( value ) => value.length >= 2, 'El nombre es obligatorio.']
}

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [ formSubmitted, setFormSubmitted ] = useState( false );

    const { 
        formState, displayName, email, password, onInputChange, 
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm( formData, formValidations );  

    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted( true );

        if( !isFormValid ) return;

        dispatch( startCreateUserWithPassword( formState ) );
    }

    return (
        <>
            <AuthLayout title='Crear Cuenta'>
                <h1>FormValid { isFormValid ? 'Valido' : 'Incorrecto' }</h1>
                <form onSubmit={ onSubmit }>
                    <Grid container>
                        <Grid item sx={{ mb: 2 }} xs={ 12 } >
                            <TextField  label='Nombre Completo'
                                        error={ !!displayNameValid && formSubmitted }
                                        helperText={ displayNameValid }
                                        name='displayName' 
                                        placeholder='Tu nombre' 
                                        onChange={ onInputChange }
                                        type='text'
                                        fullWidth
                                        value={ displayName } />
                        </Grid>

                        <Grid item sx={{ mb: 2 }} xs={ 12 } >
                            <TextField  label='Correo'
                                        error={ !!emailValid && formSubmitted }
                                        helperText={ emailValid }
                                        name='email' 
                                        placeholder='google@prueba.com'
                                        onChange={ onInputChange } 
                                        type='text'
                                        fullWidth 
                                        value={ email } />
                        </Grid>

                        <Grid item sx={{ mb: 2 }} xs={ 12 }>
                            <TextField  label='Contraseña'
                                        error={ !!passwordValid && formSubmitted }
                                        helperText={ passwordValid }
                                        name='password'
                                        placeholder='Contraseña'
                                        onChange={ onInputChange } 
                                        type='password'
                                        fullWidth
                                        value={ password } />
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb: 2 }}>
                            <Grid item xs={ 12 }>
                                <Button fullWidth 
                                        type='submit'
                                        variant='contained'>
                                <Typography>Crear Cuenta</Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' justifyContent='end'>
                            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                            <Link   color='inherit' 
                                    component={ RouterLink } 
                                    to='/auth/login'>
                                Ingresar
                            </Link>
                        </Grid>
                    </Grid>
                </form>
           </AuthLayout>
            
        </>
    )
}
