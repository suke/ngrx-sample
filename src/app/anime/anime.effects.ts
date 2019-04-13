import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, mergeMap, catchError, tap, merge } from 'rxjs/operators'

import { AnimeService } from './anime.service'
import { GetCours, GetFullYear, GetSeason, ActionTypes } from './anime.actions'
import { buildSeason } from '../utils'

@Injectable()
export class AnimeEffects {
  @Effect()
  loadCours$ = this.actions$.pipe(
    ofType<GetCours>(ActionTypes.GetCours),
    mergeMap(() => {
      return this.animeService.getCours().pipe(
        map(cours => ({
          type: ActionTypes.GetCoursSuccess,
          payload: { cours }
        })),
        catchError(() => of({ type: ActionTypes.GetCoursFailure }))
      )
    })
  )

  @Effect()
  loadFullYear$ = this.actions$.pipe(
    ofType<GetFullYear>(ActionTypes.GetFullYear),
    mergeMap(({ payload: { year } }) => {
      return this.animeService.getFullYear(year).pipe(
        map(animeInfo => ({
          type: ActionTypes.GetFullYearSuccess,
          payload: { year, animeInfo }
        })),
        catchError(() => of({ type: ActionTypes.GetFullYearFailure }))
      )
    })
  )

  @Effect()
  loadSpecifyCool = this.actions$.pipe(
    ofType<GetSeason>(ActionTypes.GetSeason),
    mergeMap(({ payload }) => {
      return this.animeService.getSpecifySeason(payload).pipe(
        map(animeAllInfo => ({
          type: ActionTypes.GetSeasonSuccess,
          payload: { season: buildSeason(payload), animeAllInfo }
        })),
        catchError(() => of({ type: ActionTypes.GetSeasonFailure }))
      )
    })
  )

  constructor(private actions$: Actions, private animeService: AnimeService) {}
}
