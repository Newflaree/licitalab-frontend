// Material UI
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar
      position='fixed'
      sx={{  }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography
            component='div'
            variant='h6'
            noWrap
          >
            Welcome, Name
          </Typography>

          <RouterLink to='/auth/login'>
            <IconButton color='error'>
              <LogoutOutlined />
            </IconButton>
          </RouterLink>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
