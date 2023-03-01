import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSingIn } from '../../store/auth';

export const LoginPage = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: '',
        password: ''
    });  
    
    const isAuthenticating = useMemo(() => status === 'checking', [ status ]);

    const onSubmit = ( event ) => {
        event.preventDefault();

        dispatch( checkingAuthentication() );
    }

    const onGoogleSingIn = () => {
        dispatch( startGoogleSingIn() );
    }

    useEffect(() => {
        dispatch( checkingAuthentication() )
    }, [])
    

    return (
        <>
            <AuthLayout title='Iniciar Sesión'>
                <form onSubmit={ onSubmit }>
                    <Grid container>
                        <Grid item sx={{ mb: 2 }} xs={ 12 } >
                            <TextField  name="email"
                                        placeholder='correo@google.com' 
                                        onChange={ onInputChange }
                                        type='email'
                                        value={ email }
                                        fullWidth />
                        </Grid>

                        <Grid item sx={{ mb: 2 }} xs={ 12 }>
                            <TextField  name='password' 
                                        placeholder='Contraseña'
                                        onChange={ onInputChange } 
                                        type='password'
                                        value={ password }
                                        fullWidth />
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb: 2 }}>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button disabled={ isAuthenticating }
                                        fullWidth
                                        type='submit'
                                        variant='contained'>
                                <Typography>Login</Typography>
                                </Button>
                            </Grid>

                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button disabled={ isAuthenticating }
                                        fullWidth 
                                        onClick={ onGoogleSingIn }
                                        variant='contained'>
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' justifyContent='end'>
                            <Typography sx={{ mr: 1 }}>¿No tienes cuenta?</Typography>
                            <Link color='inherit' 
                                    component={ RouterLink } 
                                    to='/auth/register'>
                                Crear una cuenta
                            </Link>
                        </Grid>
                    </Grid>
                </form>
           </AuthLayout>
            
        </>
    )
}
