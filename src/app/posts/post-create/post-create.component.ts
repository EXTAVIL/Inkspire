import {  Component, EventEmitter, Output } from "@angular/core";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreatePage {
  enteredTitle = "";
  enteredContent = "";
  @Output() postCreate = new EventEmitter();

  constructor(private postService: PostService) {}

  addPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreate.emit(post);
  
  }
}
