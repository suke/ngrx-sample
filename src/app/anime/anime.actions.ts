import { Action } from '@ngrx/store';
import { Cours, AnimeInfo, AnimeAllInfo } from '../types/anime';

export enum ActionTypes {
  GetCours = '[Anime] GetCours',
  GetCoursSuccess = '[Anime] GetCours Success',
  GetCoursFailure = '[Anime] GetCours Failure',
  GetFullYear = '[Anime] GetFullYear',
  GetFullYearSuccess = '[Anime] GetFullYear Success',
  GetFullYearFailure = '[Anime] GetFullYear Failure',
  SelectFullYear = '[Anime] SelectFullYear',
  GetSeason = '[Anime] GetSeason',
  GetSeasonSuccess = '[Anime] GetSeason Success',
  GetSeasonFailure = '[Anime] GetSeason Failure',
  SelectSeason = '[Anime] SelectSeason',
}

export class GetCours implements Action {
  readonly type = ActionTypes.GetCours;
}

export class GetCoursSuccess implements Action {
  readonly type = ActionTypes.GetCoursSuccess;
  constructor(public payload: { cours: Cours }) {}
}

export class GetCoursFailure implements Action {
  readonly type = ActionTypes.GetCoursFailure;
}

export class GetFullYear implements Action {
  readonly type = ActionTypes.GetFullYear;
}

export class GetFullYearSuccess implements Action {
  readonly type = ActionTypes.GetFullYearSuccess;
  constructor(
    public payload: { year: number | string; animeInfo: AnimeInfo[] }
  ) {}
}

export class GetFullYearFailure implements Action {
  readonly type = ActionTypes.GetFullYearFailure;
}

export class SelectFullYear implements Action {
  readonly type = ActionTypes.SelectFullYear;
  constructor(public payload: { year: number | string }) {}
}

export class GetSeason implements Action {
  readonly type = ActionTypes.GetSeason;
}

export class GetSeasonSuccess implements Action {
  readonly type = ActionTypes.GetSeasonSuccess;
  constructor(
    public payload: { season: string; animeAllInfo: AnimeAllInfo[] }
  ) {}
}

export class GetSeasonFailure implements Action {
  readonly type = ActionTypes.GetSeasonFailure;
}

export class SelectSeason implements Action {
  readonly type = ActionTypes.SelectSeason;
  constructor(public payload: { season: string }) {}
}

export type AnimeActions =
  | GetCours
  | GetCoursSuccess
  | GetCoursFailure
  | GetFullYear
  | GetFullYearSuccess
  | GetFullYearFailure
  | SelectFullYear
  | GetSeason
  | GetSeasonSuccess
  | GetSeasonFailure
  | SelectSeason;
