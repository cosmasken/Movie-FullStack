import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from './types';
import {useAxios} from '../src/api/useAxios'
import MovieCard from './components/MovieCard';
import NotFound from './components/NotFound';
import LoadingComponent from './components/loading/LoadingAnimation';

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  

const [movie, isLoading, error] = useAxios<Movie>(
  `https://localhost:5001/api/movie/${id}`
);

if (isLoading) {
  return <LoadingComponent/>
}

if (error) {
  return <div>Error: {error.message}</div>;
}

if (!movie) {
  return <NotFound/>
}

return (

<MovieCard movie={movie} />

);
}

export default MovieDetails;