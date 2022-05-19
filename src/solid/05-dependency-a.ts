import { PostService } from './05-dependency-b';
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostService,
} from './05-dependency-c';

// Main
(async () => {
  /*
        Como uso abstracciones varias implementaciones son 
        válidas en el constructor del postService.

        El provider puede cambiar de forma sencilla
  */

  // provider original
  // const provider = new LocalDataBaseService();

  // provider con JSON quemado
  //   const provider = new JsonDataBaseService();

  // provider con peticion
  const provider = new WebApiPostService();

  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
