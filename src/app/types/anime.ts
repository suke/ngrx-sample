export type Cours = {
  [id: string]: {
    id: number
    year: number
    cours: number
  }
}

export interface AnimeInfo {
  id: number
  title: string
}

export interface AnimeAllInfo extends AnimeInfo {
  title_short1: string
  title_short2: string
  title_short3: string
  public_url: string
  twitter_account: string
  twitter_hash_tag: string
  cours_id: number
  created_at: string
  updated_at: string
  sex: number
  sequel: number
  city_code: number
  city_name: string
}
