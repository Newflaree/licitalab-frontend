import { Link as RouterLink } from 'react-router-dom';
// Material UI
import {
  Button,
  Grid,
  Link,
  TextField,
} from '@mui/material';
// Layout
import { AuthLayout } from '../layout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>

      <form>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label='Email'
              type='email'
              placeholder='What is your email?' 
              fullWidth
            />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label='Password'
              type='password'
              placeholder='What is your password?' 
              fullWidth
            />
          </Grid>

          <Grid
            container
            spacing={ 2 }
            sx={{
              mb: 2,
              mt: 2
            }}
          >
            <Grid item xs={ 12 }>
              <RouterLink to='/'>
                <Button
                  variant='contained'
                  fullWidth
                >
                  Login
                </Button>
              </RouterLink>
            </Grid>
          </Grid>

          <Grid
            container
            direction='row'
            justifyContent='end'
          >
            <Link
              component={ RouterLink }
              color='inherit'
              to='/auth/register'
            >
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}
