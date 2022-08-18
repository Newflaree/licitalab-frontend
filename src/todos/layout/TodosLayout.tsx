import { Box } from '@mui/material';
// Components
import { Navbar } from '../components';

export const TodosLayout = ({ children }: any) => {
  return (
    <Box>
      <Navbar />

      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        { /* Toolbar */ }

        { children }

      </Box>
    </Box>
  )
}
