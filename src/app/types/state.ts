import { AnimeState } from '../anime/anime.reducer'

type AppState = {
  anime: AnimeState
}

export type State = {
  App: AppState
  Anime: AnimeState
}
