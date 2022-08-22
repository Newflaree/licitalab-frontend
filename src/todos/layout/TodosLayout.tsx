// Material UI
import { Box, Grid, Toolbar } from '@mui/material';
// Components
import { Navbar } from '../components';

export const TodosLayout = ({ children }: any) => {
  return (
    <Box>
      <Navbar />

      <Box
        component='main'
        sx={{ 
          backgroundColor: 'lightgray',
          flexGrow: 1,
          p: 3 
        }}
      >
        <Toolbar />

        <Grid
          container
          spacing={ 0 }
          direction='column'
          borderRadius={ 2 }
          sx={{
            minHeight: '100vh',
            backgroundColor: 'white',
            p: { xs: 4, sm: 7 },
            margin: 'auto',
            width: { xs: '100%', sm: 650 }
          }}
        >

          { children }

        </Grid>
      </Box>
    </Box>
  )
}
