import { Component } from "@angular/core";
import { PostService } from "../../services/post.service";

@Component({
    selector: "app-post-list",
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListPage {
    
    latestPost: any

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postService.post$.subscribe((post) => {
            this.latestPost = post
        })
    }

}