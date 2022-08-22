import { Grid, Typography } from '@mui/material';

export const Header = () => {
  const today = new Date();
  const dd = String( today.getDate() ).padStart( 2, '0' );
  const mm = String( today.getMonth() + 1 ).padStart( 2, '0' );
  const yyyy = today.getFullYear();

  return (
    <Grid
      container
      justifyContent='space-between'
      alignItems='center'
      marginBottom={ 4 }
    >
      <Typography
        component='div'
        variant='h4'
        noWrap
        fontWeight={ 700 }
      >
        Todos
      </Typography>

      <Typography
        component='div'
        variant='h6'
        noWrap
      >
        Today: { `${ dd }/${ mm }/${ yyyy }` }
      </Typography>
    </Grid>
  )
}
