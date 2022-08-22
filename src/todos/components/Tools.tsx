import { FilterAlt } from '@mui/icons-material';
import { Button, Grid, IconButton } from '@mui/material';

export const Tools = () => {
  return (
    <Grid
      container
      justifyContent='space-between'
      alignItems='center'
    >
      <Grid
        item
        sx={{
          mb: 2,
          mt: 2
        }}
      >
        <Grid
          item 
        >
          <Button
            variant='contained'
          >
            Clean Selected
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        alignItems='center'
      >
             
        <IconButton>
          <FilterAlt sx={{ mr: 1 }} />
            Filter
        </IconButton>
      </Grid>
    </Grid>
  )
}
