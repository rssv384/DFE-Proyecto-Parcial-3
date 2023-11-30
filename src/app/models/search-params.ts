import { MovieStatus } from './sale';

export interface SearchParams {
  movie_title?: string;
  status?: string;
  release_date?: string;
}
