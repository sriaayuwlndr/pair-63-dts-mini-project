import React from "react";
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import tmdb from '../apis/tmdb';
import MoviePlay from "../components/MoviePlay";
// import NavbarDetailMovie from '../components/NavbarDetailMovie';
import Container from '@mui/material/Container';
import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlayMoviePage = () => {

    let params = useParams();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("movie/"+params?.id+"/videos");
                setMovies(fetchedMovies.data.results[0]);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, [params?.id]);

    
    return (
        <div className="App">
            <Navbar></Navbar>
            <Container maxWidth="xl" sx={{ bgcolor: '#030303', height: '100vh', width: '100%'} }>
                <Box component="main" sx={{ p: 0 , mt:8}}>
                    <MoviePlay key={movies.title} propsMovies={movies}></MoviePlay>
                </Box>             
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default PlayMoviePage;