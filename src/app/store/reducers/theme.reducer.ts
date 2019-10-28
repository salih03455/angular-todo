import * as ThemeActions from '../actions/theme.actions'

/* Store'un Interface'si */
export interface InitialStateInterface {
  color: string
}

export interface ActionCustom {
  type: string,
  payload: any
}

const InitialState:InitialStateInterface = {
  color: 'primary'
}

export function themeReducer(state = InitialState, action: ActionCustom) {
  switch (action.type) {
    case ThemeActions.CURRENT_COLOR:
      return action.payload 
    default:
      return state
  }
}