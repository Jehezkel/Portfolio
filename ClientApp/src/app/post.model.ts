export class Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdDate: Date;
  /**
   *
   */
  constructor(obj?: any) {
          this.id = obj && obj.id || null;
          this.title = obj && obj.title || null;
          this.content = obj && obj.content || null;
          this.author = obj && obj.author || null;
          this.createdDate = obj && obj.createdDate || null;
  }
}
