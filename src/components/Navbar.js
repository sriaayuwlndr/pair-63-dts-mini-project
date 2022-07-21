import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate, NavLink } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import { MovieFilter, Logout } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material';
import theme from '../themes/theme';

const navItems = [
  { text: 'Home', link: '/' },
  { text: 'Trending', link: '/trending' },
  { text: 'Up Coming', link: '/upcoming' },
  { text: 'Popular', link: '/popular' }
];

export default function Navbar() {

  const navigate = useNavigate();

  const onLogOut = () => {
    signOut(auth).then(() => {
      navigate("/login");
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <MovieFilter sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            <IconButton style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
              NONTON
            </IconButton>
          </Typography>
          <Box sx={{ display: 'block' }}>
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ padding: 1 }}>
              <Logout onClick={onLogOut} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}