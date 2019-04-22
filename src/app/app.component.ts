import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cours, AnimeInfo, AnimeAllInfo } from './types/anime';
import { AnimeService } from './anime/anime.service';
import {
  selectAnimeAllCours,
  selectAnimeGetFullYear,
  selectAnimeGetSeason,
} from './anime/anime.selectors';
import { State } from './types/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'anime';
  cours$: Observable<Cours>;
  animeFullYear$: Observable<AnimeInfo[]>;
  animeSpecifySeason$: Observable<AnimeAllInfo[]>;

  constructor(
    private animeService: AnimeService,
    private store: Store<{ anime: State['Anime'] }>
  ) {
    this.cours$ = this.store.select(selectAnimeAllCours);
    this.animeFullYear$ = this.store.select(selectAnimeGetFullYear);
    this.animeSpecifySeason$ = this.store.select(selectAnimeGetSeason);
  }

  ngOnInit() {
    this.getCours();
    this.getFullYear(2018);
    this.getSpecifySeason({ year: 2018, cool: 4 });
    this.cours$.subscribe(cours => {
      console.log(cours);
    });
    this.animeFullYear$.subscribe(anime => {
      console.log(anime);
    });
    this.animeSpecifySeason$.subscribe(anime => {
      console.log(anime);
    });
  }

  getCours() {
    this.animeService.getCours();
  }

  getFullYear(year: number) {
    this.animeService.getFullYear(year);
  }

  getSpecifySeason({
    year,
    cool,
  }: {
    year: string | number;
    cool: string | number;
  }) {
    this.animeService.getSpecifySeason({ year, cool });
  }
}
