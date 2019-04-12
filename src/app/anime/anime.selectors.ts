import { createSelector } from '@ngrx/store'
import { State } from '../types/state'

export const selectAnime = (state: State['App']) => state.anime

export const selectAnimeAllCours = createSelector(
  selectAnime,
  (state: State['Anime']) => state.cours
)
