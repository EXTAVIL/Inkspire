import { Component } from '@angular/core';
import { PostCreatePage } from "./posts/post-create/post-create.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  storedPosts = []
  addedPost(post) {
  this.storedPosts.push(post);
  }
}
