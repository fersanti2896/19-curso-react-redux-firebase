import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <>
           <AuthLayout title='Crear Cuenta'>
            <form>
                    <Grid container>
                        <Grid item sx={{ mb: 2 }} xs={ 12 } >
                            <TextField label='Nombre Completo' 
                                    placeholder='Tu nombre' 
                                    type='text'
                                    fullWidth />
                        </Grid>

                        <Grid item sx={{ mb: 2 }} xs={ 12 } >
                            <TextField label='Correo' 
                                    placeholder='google@prueba.com' 
                                    type='text'
                                    fullWidth />
                        </Grid>

                        <Grid item sx={{ mb: 2 }} xs={ 12 }>
                            <TextField label='Contraseña' 
                                    placeholder='Contraseña' 
                                    type='password'
                                    fullWidth />
                        </Grid>

                        <Grid container spacing={ 2 } sx={{ mb: 2 }}>
                            <Grid item xs={ 12 }>
                                <Button fullWidth variant='contained'>
                                <Typography>Crear Cuenta</Typography>
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container direction='row' justifyContent='end'>
                            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                            <Link color='inherit' 
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
