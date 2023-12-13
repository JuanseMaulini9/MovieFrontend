export interface Structure {
  id: number;
  title: string;
  description: string;
  mediaType: "movie" | "tv";
  coverPath: string;
  posterPath: string;
  genreIds: number[];
}
