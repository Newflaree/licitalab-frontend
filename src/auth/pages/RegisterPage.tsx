import { Link as RouterLink } from 'react-router-dom';
// Material UI
import {
  Button,
  Grid,
  Link,
  TextField
} from '@mui/material';
// Layout
import { AuthLayout } from '../layout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Register'>

      <form>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label='Name'
              type='text'
              placeholder='What is your name?' 
              fullWidth
            />
          </Grid>

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
              <Button
                variant='contained'
                fullWidth
              >
                Register
              </Button>
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
              to='/auth/login'
            >
              You already have an account?
            </Link>
          </Grid>
        </Grid>
      </form>

    </AuthLayout>
  )
}

