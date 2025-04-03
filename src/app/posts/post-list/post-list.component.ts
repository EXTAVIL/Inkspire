import { Component } from "@angular/core";
import { PostService } from "../../services/post.service";

@Component({
    selector: "app-post-list",
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListPage {
    
    latestPost: any
    posts = [
        {title: 'First Post', content: 'This is my first post to render'},
        {title: 'Second Post', content: 'This is my Second post to render'},
        {title: 'Third Post', content: 'This is my Third post to render'}
    ]

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.postService.post$.subscribe((post) => {
            this.latestPost = post
        })
    }

}