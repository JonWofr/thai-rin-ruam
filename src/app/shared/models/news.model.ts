import { Author } from './author.model';

export interface News {
  id: string;
  title: string;
  date: Date;
  text: string;
  imageUrls: string[];
  author: Author;
}
