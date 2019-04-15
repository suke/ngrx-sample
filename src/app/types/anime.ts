export type Cours = {
  [id: string]: {
    id: number;
    year: number;
    cours: number;
  };
};

export type AnimeAllInfo = {
  id: number;
  title: string;
  title_short1: string;
  title_short2: string;
  title_short3: string;
  public_url: string;
  twitter_account: string;
  twitter_hash_tag: string;
  cours_id: number;
  created_at: string;
  updated_at: string;
  sex: number;
  sequel: number;
  city_code: number;
  city_name: string;
};

export type AnimeInfo = Pick<AnimeAllInfo, "id" | "title">;
