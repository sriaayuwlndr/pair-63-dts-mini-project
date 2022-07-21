import * as React from 'react';


const BASE_VIDEO_URL = "https://www.youtube.com/embed/";

const MovieDetail = ({propsMovies}) => {

    const keyVideo = propsMovies.key;
    console.log(propsMovies);
  return (
    <>
    <iframe width="100%" height="560"  src={`${BASE_VIDEO_URL}${keyVideo}`} title="LULUS TES BAHASA JEPANG TERSULIT MENGALAHKAN PARA SENIOR" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  );
}

export default MovieDetail;
