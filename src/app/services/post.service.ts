import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PostService {
    private postSubject =  new BehaviorSubject<String>('');
    post$ = this.postSubject.asObservable();
    constructor() { }
    updatePost(post: String) {
        this.postSubject.next(post);
    }
}