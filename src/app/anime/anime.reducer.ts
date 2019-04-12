import { Action } from '@ngrx/store'
import { ActionTypes, AnimeActions } from './anime.actions'
import { Cours } from '../types/anime'

export interface AnimeState {
  loading: boolean
  cours: Cours
}

export const initialState: AnimeState = {
  loading: false,
  cours: {}
}

export function animeReducer(
  state = initialState,
  action: AnimeActions
): AnimeState {
  switch (action.type) {
    case ActionTypes.GetCours:
      return { ...state, loading: true }
    case ActionTypes.GetCoursSuccess:
      const { cours } = action.payload
      return {
        ...state,
        loading: false,
        cours
      }
    default: {
      return state
    }
  }
}
