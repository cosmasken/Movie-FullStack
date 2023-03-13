import { createStore, combineReducers } from 'redux'
import movieReducer from './reducers/movieReducer'

interface AppState {
  movies: ReturnType<typeof movieReducer>
}

const rootReducer = combineReducers<AppState>({
  movies: movieReducer
})

const store = createStore(rootReducer)

export default store
