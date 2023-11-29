export enum MovieStatus {
  OnCinemas = 'On Cinemas',
  ComingSoon = 'Coming Soon',
  NotScreening = 'Not Screening',
}

export interface Sale {
  id: number;
  movie_title: string;
  poster_path: string;
  status: MovieStatus;
  release_date: Date;
  tickets_sold: number;
  total_sales: number;
}
