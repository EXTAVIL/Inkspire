import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';


import { Post } from "./post.model";
import { title } from "process";

@Injectable({ providedIn: "root" })
export class PostsService {
  getPost(postId: any): any {
    throw new Error("Method not implemented.");
  }
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>(
        "http://localhost:3000/api/posts"
      )
      .pipe(map((postData) => {
        return postData.posts.map(posts => {
              return {
                title: posts.title,
                content: posts.content,
                id: posts.id
              }
            })
      }))
      // .pipe(map((postData) => {
      //   return postData.posts.map(posts => {
      //     return {
      //       title: posts.title,
      //       content: posts.content,
      //       id: posts._id
      //     }
      //   })
      // })
      .subscribe(TransformedPosts => {
        this.posts = TransformedPosts;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const postData: Partial<Post> = { title, content };
    this.http
      .post<{ message: string , id: string}>("http://localhost:3000/api/posts", postData)
      .subscribe(responseData => {
        const post: Post = {
          id: responseData.id,
          title: title,
          content: content
        };
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }

  deletePost(postId: string) {
    this.http.delete('http://localhost:3000/api/posts/' + postId)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id != postId);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    })
  }
}
