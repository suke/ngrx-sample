import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Cours, AnimeInfo, AnimeAllInfo } from './types/anime'

import { GetCours, GetFullYear, GetSeason } from './anime/anime.actions'
import {
  selectAnimeAllCours,
  selectAnimeGetFullYear,
  selectAnimeGetSeason
} from './anime/anime.selectors'
import { State } from './types/state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'anime'
  cours$: Observable<Cours>
  animeFullYear$: Observable<AnimeInfo[]>
  animeSpecifySeason$: Observable<AnimeAllInfo[]>

  constructor(private store: Store<{ anime: State['Anime'] }>) {
    this.cours$ = store.pipe(select(selectAnimeAllCours))
    this.animeFullYear$ = this.store.pipe(
      select(selectAnimeGetFullYear, { year: 2019 })
    )
    this.animeSpecifySeason$ = this.store.pipe(
      select(selectAnimeGetSeason, { year: 2018, cool: 4 })
    )
  }

  ngOnInit() {
    this.store.dispatch(new GetCours())
    this.store.dispatch(new GetFullYear({ year: 2019 }))
    this.store.dispatch(new GetSeason({ year: 2018, cool: 4 }))

    this.cours$.subscribe(cours => {
      console.log(cours)
    })
    this.animeFullYear$.subscribe(anime => {
      console.log(anime)
    })
    this.animeSpecifySeason$.subscribe(anime => {
      console.log(anime)
    })
  }
}
