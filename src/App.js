import './App.css';
import Navbar from './components/Navbar';
import MoviePage from './containers/MoviePage';
import Footer from './components/Footer';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from './themes/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <MoviePage />
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
