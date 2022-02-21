import { Author } from './author.model';
import { Timestamp } from '@angular/fire/firestore';

export interface News {
  id: string;
  title: string;
  date: Timestamp;
  text: string;
  imageUrls: string[];
  author: Author;
}
