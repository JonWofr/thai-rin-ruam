export interface News {
  id: string;
  title: string;
  date: Date;
  text: string;
  imageUrls: string[];
  author: {
    name: string;
    avatarUrl: string;
  };
}
