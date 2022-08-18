// Material UI
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';

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

          <IconButton color='error'>
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
