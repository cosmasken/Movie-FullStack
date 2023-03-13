import React, { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import { Movie } from '../types';
import { addMovies, AddMoviesAction } from '../redux/actions/movieAction';
import store from '../redux/store';



const MovieSearch = () => {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.get(`/api/movies/search?query=${query}`);
    setMovies(response.data);
    const addMoviesAction: AddMoviesAction = addMovies(response.data)
store.dispatch(addMoviesAction);
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default MovieSearch;
