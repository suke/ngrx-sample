import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Cours } from './types/anime'

import { GetCours } from './anime/anime.actions'
import { selectAnimeAllCours } from './anime/anime.selectors'
import { State } from './types/state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'anime'
  cours$: Observable<Cours>

  constructor(private store: Store<{ anime: State['Anime'] }>) {
    this.cours$ = store.pipe(select(selectAnimeAllCours))
    this.cours$.subscribe(cours => {
      console.log(cours)
    })
  }

  ngOnInit() {
    this.store.dispatch(new GetCours())
  }
}
