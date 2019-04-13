import { Action } from '@ngrx/store'
import { ActionTypes, AnimeActions } from './anime.actions'
import { Cours, AnimeInfo, AnimeAllInfo } from '../types/anime'

export interface AnimeState {
  loading: boolean
  cours: Cours
  animeInfo: { [yaer: string]: AnimeInfo[] }
  animeAllInfo: { [season: string]: AnimeAllInfo[] }
}

export const initialState: AnimeState = {
  loading: false,
  cours: {},
  animeInfo: {},
  animeAllInfo: {}
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
    case ActionTypes.GetFullYear:
      return { ...state, loading: true }
    case ActionTypes.GetFullYearSuccess:
      const { year, animeInfo } = action.payload
      return {
        ...state,
        loading: false,
        animeInfo: { ...state.animeInfo, [year]: animeInfo }
      }
    case ActionTypes.GetSeason:
      return { ...state, loading: true }
    case ActionTypes.GetSeasonSuccess:
      const { season, animeAllInfo } = action.payload
      return {
        ...state,
        loading: false,
        animeAllInfo: { ...state.animeAllInfo, [season]: animeAllInfo }
      }
    default: {
      return state
    }
  }
}
