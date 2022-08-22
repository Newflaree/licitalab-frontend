import {CalendarMonth, CheckCircle} from '@mui/icons-material';
import {
  Card,
  CardActionArea,
  CardContent,
  Checkbox,
  Grid,
  TextField,
  Typography
} from '@mui/material';

export const TodoCard = ({ title, statusColor }: any) => {

  return (
    <Card
      sx={{
        backgroundColor: statusColor,
        maxWidth: '100%',
        mb: 2 
      }}
    >
      <CardActionArea>
        <CardContent>
          <Grid
            container
            direction='row'
            alignItems='center'
          >

            <Grid width={ '10%' }>
              <Checkbox />
            </Grid>

            <Grid
              container 
              direction='row'
              width={ '90%' } 
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography>Hola</Typography>

              <Grid>
                <TextField 
                  placeholder='14/03/2022'
                  disabled
                  sx={{ backgroundColor: 'white' }}
                />
                <CalendarMonth sx={{ ml: 1 }} />
                <CheckCircle sx={{ ml: 1 }} />
              </Grid>
            </Grid>

          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
