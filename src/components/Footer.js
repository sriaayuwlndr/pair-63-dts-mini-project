import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { ThemeProvider } from '@mui/material';
import theme from '../themes/theme';


export default function Footer() {


  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 , marginTop:"10"}}>
      <AppBar position="fixed" color="secondary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <CopyrightIcon sx={{ display: 'flex', mr: 1 }} />
          <Typography variant="caption" display="block" gutterBottom>
            PAIR 63 - REA2B
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}