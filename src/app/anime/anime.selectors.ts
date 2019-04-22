import { createSelector } from '@ngrx/store';
import { State } from '../types/state';

export const selectAnime = (state: State['App']) => state.anime;

export const selectAnimeAllCours = createSelector(
  selectAnime,
  (state: State['Anime']) => state.cours
);

export const selectAnimeGetFullYear = createSelector(
  selectAnime,
  (state: State['Anime']) => {
    return state.selectFullYear;
  }
);

export const selectAnimeGetSeason = createSelector(
  selectAnime,
  (state: State['Anime']) => {
    return state.selectSeason;
  }
);
