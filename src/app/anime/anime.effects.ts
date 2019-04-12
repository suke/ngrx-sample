import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { of } from 'rxjs'
import { map, mergeMap, catchError, tap } from 'rxjs/operators'

import { AnimeService } from './anime.service'
import { ActionTypes } from './anime.actions'

@Injectable()
export class AnimeEffects {
  @Effect()
  loadCours$ = this.actions$.pipe(
    ofType(ActionTypes.GetCours),
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

  constructor(private actions$: Actions, private animeService: AnimeService) {}
}
