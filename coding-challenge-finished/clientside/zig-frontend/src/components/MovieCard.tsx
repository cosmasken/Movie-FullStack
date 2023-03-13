import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Movie } from '../types';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card style={{ width: '100rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        
        <Card.Text>{movie.overview}</Card.Text>
             </Card.Body>
    </Card>
  );
};

export default MovieCard;
