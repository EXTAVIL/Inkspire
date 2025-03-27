import {  Component } from "@angular/core";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreatePage {
  enteredValue: string = "";
  newPost: string = "";

  constructor(private postService: PostService) {}

  addPost() {
    setTimeout(() => {
        // this.newPost = this.enteredValue
        this.postService.updatePost(this.enteredValue);
        this.enteredValue = ''
      });
  }
}
