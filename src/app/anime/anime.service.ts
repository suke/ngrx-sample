import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  readonly endPoint = 'http://api.moemoe.tokyo/anime/v1'
  constructor(private http: HttpClient) {}

  getCours() {
    return this.http.get(`${this.endPoint}/master/cours`)
  }
}
