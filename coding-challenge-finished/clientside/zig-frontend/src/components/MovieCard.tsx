import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Movie } from '../types';

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (

<Card className="movie-details">
  <div className="movie-details__poster">
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster"/>
  </div>
  <Card.Body className="movie-details__info">
    <h2 className="movie-details__title">Movie Title</h2>
    <p className="movie-details__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper dui sit amet velit tincidunt feugiat. Nam bibendum massa eu elit tincidunt luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id velit a enim aliquet gravida quis vel elit. In hac habitasse platea dictumst. Nam maximus, felis in ultricies ullamcorper, justo lectus volutpat massa, ac posuere tellus odio a dolor.</p>
    <ul className="movie-details__meta">
      <li><span>Release date:</span> January 1, 2022</li>
      <li><span>Director:</span> John Doe</li>
      <li><span>Cast:</span> Jane Smith, Bob Johnson, Lisa Kim</li>
      <li><span>Genres:</span> Action, Adventure, Comedy</li>
    </ul>
    <div className="movie-details__actions">
      <button className="movie-details__button">Watch Now</button>
      <button className="movie-details__button">Add to Watchlist</button>
    </div>
  </Card.Body>
</Card>


    // <Card style={{ width: '100rem' }}>
    //   <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    //   <Card.Body>
    //     <Card.Title>{movie.title}</Card.Title>
        
    //     <Card.Text>{movie.overview}</Card.Text>
    //          </Card.Body>
    // </Card>
  );
};

export default MovieCard;
