import * as MovieActions from '../actions/movie.actions'

/* Store'un Interface'si */
export interface InitialStateInt {
  movieList: Array<any>,
  sort: Array<any>,
  filter: Array<any>
}

export interface ActionCustom {
  type: string,
  payload: any
}

const InitialState:InitialStateInt = {
  movieList: [],
  sort: [],
  filter: []
}

export function movieReducer(state = InitialState, action: ActionCustom) {
  switch (action.type) {
    case MovieActions.MOVIE_ADD:
      return {...state, movieList: [...state.movieList, action.payload]}
    case MovieActions.MOVIE_DELETE:
      return {...state, movieList: [...state.movieList.filter(movie => movie.id !== action.payload)]}
    case MovieActions.RATE_CHANGE:
      return {...state, movieList: state.movieList.map(movie => 
        movie.id == action.payload.id ? { ...movie, movieRate: action.payload.rate } : movie
      )}
    case MovieActions.FILTER:
      if (action.payload == 'all') {
        return {...state, filter: [...state.movieList]}
      } else {
        return {...state, filter: [...state.movieList.filter(movie => movie.movieType == action.payload)]}
      }
    default:
      return state
  }
}