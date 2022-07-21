import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {

    let navigate = useNavigate();

    const detailMovie = (movie) => {

      const idMovie = movie.id;
      navigate(`/detail/${idMovie}`);
    }

    return (
      <Card id={movie.id} sx={{ display: 'flex', width: 400, margin: 5, marginBottom:10}}>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 225 }}
          image={`${BASE_IMAGE_URL}${movie.poster_path}`}
          alt="Movie poster"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6">
              {movie.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {new Date(movie.release_date).getFullYear()}
            </Typography>
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
              <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
            </Box>
            
          </CardContent>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Button variant="contained" endIcon={<SendIcon />} onClick={() => detailMovie(movie)}>
                  DETAIL
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Card>
    );
  }
  
  export default MovieCard;