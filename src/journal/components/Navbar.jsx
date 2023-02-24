import { LogoutOutlined, MenuOpenOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const Navbar = ({ drawerWidth = 240 }) => {
    return (
        <>
            <AppBar position='fixed'
                    sx={{ 
                        ml: { sm: `${ drawerWidth }px` },
                        width: { sm: `calc(100% - ${ drawerWidth }px)` } 
                    }}>
                <Toolbar>
                    <IconButton aria-label='icon-button' 
                                color='inherit' 
                                edge='start'
                                sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuOpenOutlined />
                    </IconButton>

                    <Grid alignItems='center' 
                          container 
                          direction='row' 
                          justifyContent='space-between'> 
                        <Typography component='div' 
                                    noWrap 
                                    variant='h6'>
                            JournalApp
                        </Typography>

                        <IconButton color='error'>
                            <LogoutOutlined />
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

Navbar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
}