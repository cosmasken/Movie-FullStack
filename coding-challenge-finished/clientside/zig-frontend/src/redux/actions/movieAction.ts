import { Action } from 'redux'
import { Movie } from '../../types'

export const ADD_MOVIES = 'ADD_MOVIES'

export interface AddMoviesAction extends Action<typeof ADD_MOVIES> {
  payload: Movie[]
}

export function addMovies(movies: Movie[]): AddMoviesAction {
  return { type: ADD_MOVIES, payload: movies }
}
