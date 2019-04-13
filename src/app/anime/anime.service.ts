import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Cours, AnimeInfo, AnimeAllInfo } from '../types/anime'

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  readonly endPoint = 'http://api.moemoe.tokyo/anime/v1'
  constructor(private http: HttpClient) {}

  getCours() {
    return this.http.get<Cours>(`${this.endPoint}/master/cours`)
  }

  getFullYear(year: string | number) {
    return this.http.get<AnimeInfo[]>(`${this.endPoint}/master/${year}`)
  }

  getSpecifySeason({
    year,
    cool
  }: {
    year: string | number
    cool: string | number
  }) {
    return this.http.get<AnimeAllInfo[]>(
      `${this.endPoint}/master/${year}/${cool}`
    )
  }
}
