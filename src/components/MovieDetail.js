import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import '../App.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const MovieDetail = ({propsMovies}) => {

  let navigate = useNavigate();

  const playMovie = (propsMovies) => {

    const idMovie = propsMovies.id;
    navigate(`/play/${idMovie}`);
  }

  return (
    <Card variant="outlined" sx={{ display:"flex", minHeight: '280px', minWidth: 320, maxWidth: '1000', height:"150%", marginLeft:"0", mt:"70"}}>
      <CardCover >
        <img
          src={`${BASE_IMAGE_URL}${propsMovies.backdrop_path}`}
          alt=""       
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography textAlign={"left"} textColor="neutral.300" level="h2" fontSize="50px">
          {propsMovies.original_title}
        </Typography >
        <Typography textAlign={"left"} textColor="neutral.300" pt={2}>
          {propsMovies.overview}
        </Typography>
        <Typography startDecorator={<LanguageIcon />} textColor="neutral.300" pt={2} pb={3}>
          {propsMovies.original_language}
        </Typography >
        <Button variant="outlined" onClick={() => playMovie(propsMovies)}>PLAY</Button>
      </CardContent>
    </Card>
  );
}

export default MovieDetail;
