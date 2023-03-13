import React from 'react';
import {Movie} from '../types';
type Props = {
  movies: Movie[];
};

const MovieList = ({ movies }: Props) => (
  <ul>
    {movies.map((movie) => (
      <li key={movie.id}>
        {movie.title} ({movie.overview})
      </li>
    ))}
  </ul>
);

export default MovieList;
