import { Action } from 'redux'
import {Movie} from '../../types'

interface MovieState {
  movies: Movie[]
}

// export interface Movie {
//   title: string
//   overview:String
//   posterPath: String
// }

const initialState: MovieState = {
  movies: []
}

function movieReducer(state: MovieState = initialState, action: Action): MovieState {
  switch (action.type) {
    case 'ADD_MOVIES':
      return { ...state, movies: (action as AddMoviesAction).payload }
    default:
      return state
  }
}

interface AddMoviesAction extends Action {
  payload: Movie[]
}

export default movieReducer
