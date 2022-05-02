import { Author } from './author.model';
import { Timestamp } from '@angular/fire/firestore';

export interface News {
  id: string;
  title: string;
  creationDate: Timestamp;
  text: string;
  imageUrls: string[];
  author: Author;
}
