import { JsonDataBaseService, PostProvider } from './05-dependency-c';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private postProvider: PostProvider) {}

  async getPosts() {
    /*
     get posts es un método abstracto que debe ser implemetado por las 
     clases que extiendan de PostProvider
     */
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
