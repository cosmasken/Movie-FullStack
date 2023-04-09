import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Movie } from '../types';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (

<Card >
  <Card.Img  variant='top'  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}>
    {/* <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster"/> */}
  </Card.Img>
  <Card.Body className="movie-details__info">
    <h2 className="movie-details__title">{movie.title}</h2>
    <p className="movie-details__description">{movie.overview}</p>
    <ul className="movie-details__meta">
      <li><span>Release date:</span> {movie.release_date}</li>
      {/* <li><span>Director:</span> {movie.voteCount}</li> */}
      {/* <li><span>Cast:</span> Jane Smith, Bob Johnson, Lisa Kim</li> */}
      {/* <li><span>Genres:</span> {movie.genre_ids}</li> */}
    </ul>
    <div className="movie-details__actions">
      <button className="movie-details__button">Watch Now</button>
      <button className="movie-details__button">Add to Watchlist</button>
    </div>
  </Card.Body>
</Card>

  );
};

export default MovieCard;
