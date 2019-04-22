import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cours, AnimeInfo, AnimeAllInfo } from '../types/anime';
import { Store } from '@ngrx/store';
import { State } from '../types/state';
import {
  GetCours,
  GetCoursSuccess,
  GetFullYear,
  GetFullYearSuccess,
  SelectFullYear,
  GetSeason,
  GetSeasonSuccess,
  SelectSeason,
} from './anime.actions';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  readonly endPoint = 'http://api.moemoe.tokyo/anime/v1';
  constructor(
    private http: HttpClient,
    private store: Store<{ anime: State['Anime'] }>
  ) {}

  async getCours() {
    this.store.dispatch(new GetCours());
    const cours = await this.http
      .get<Cours>(`${this.endPoint}/master/cours`)
      .toPromise();
    this.store.dispatch(new GetCoursSuccess({ cours }));
  }

  async getFullYear(year: string | number) {
    this.store.dispatch(new GetFullYear());
    const animeInfo = await this.http
      .get<AnimeInfo[]>(`${this.endPoint}/master/${year}`)
      .toPromise();
    this.store.dispatch(new GetFullYearSuccess({ year, animeInfo }));
    this.selectFullYear(year);
  }

  async getSpecifySeason({
    year,
    cool,
  }: {
    year: string | number;
    cool: string | number;
  }) {
    this.store.dispatch(new GetSeason());
    const animeAllInfo = await this.http
      .get<AnimeAllInfo[]>(`${this.endPoint}/master/${year}/${cool}`)
      .toPromise();
    this.store.dispatch(
      new GetSeasonSuccess({ season: `${year}_${cool}`, animeAllInfo })
    );
    this.selectSeason({ year, cool });
  }

  selectFullYear(year: number | string) {
    this.store.dispatch(new SelectFullYear({ year }));
  }

  selectSeason({ year, cool }) {
    this.store.dispatch(new SelectSeason({ season: `${year}_${cool}` }));
  }
}
