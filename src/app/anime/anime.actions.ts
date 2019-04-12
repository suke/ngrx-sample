import { Action } from '@ngrx/store'
import { Cours } from '../types/anime'

export enum ActionTypes {
  GetCours = '[Anime] GetCours',
  GetCoursSuccess = '[Anime] GetCours Success',
  GetCoursFailure = '[Anime] GetCours Failure',
  GetFullYear = '[Anime] GetFullYear',
  GetSpecifiedCool = '[Anime] GetSpecifiedCool'
}

export class GetCours implements Action {
  readonly type = ActionTypes.GetCours
}

export class GetCoursSuccess implements Action {
  readonly type = ActionTypes.GetCoursSuccess
  constructor(public payload: { cours: Cours }) {}
}

export class GetCoursFailure implements Action {
  readonly type = ActionTypes.GetCoursFailure
}

export class GetFullYear implements Action {
  readonly type = ActionTypes.GetFullYear
}

export class GetSpecifiedCool implements Action {
  readonly type = ActionTypes.GetSpecifiedCool
}

export type AnimeActions =
  | GetCours
  | GetCoursSuccess
  | GetCoursFailure
  | GetFullYear
  | GetSpecifiedCool
