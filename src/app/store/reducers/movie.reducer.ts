import { Action } from '@ngrx/store';
import * as Actions from '../actions/actions'


/* Store'un Interface'si */
export interface InitialStateInt {
  movieList: Array<any>,
  sort: string,
  filter: string
}

export interface ActionCustom {
  type: string,
  payload: any
}

const InitialState:InitialStateInt = {
  movieList: [],
  sort: '',
  filter: ''
}

export function movieReducer(state = InitialState, action: ActionCustom) {
  switch (action.type) {
    case Actions.MOVIE_ADD:
      return {...state, movieList: [...state.movieList, action.payload]}
    case Actions.MOVIE_DELETE:
        return {...state, movieList: [...state.movieList.filter(movie => movie.id !== action.payload)]}
    default:
      return state
  }
}