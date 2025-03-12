import {  Component } from "@angular/core";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.scss"]
})
export class PostCreatePage {
  enteredValue: string = "";
  newPost: string = "";

  constructor() {}

  addPost() {
    setTimeout(() => {
        this.newPost = this.enteredValue
      });
  }
}
