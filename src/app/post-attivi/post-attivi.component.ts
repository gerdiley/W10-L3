import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import * as postSrv from '../services/get-post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.css']
})
export class PostAttiviComponent implements OnInit {
  posts:Post[] = [];

  constructor() {

   }

  ngOnInit(): void {
    postSrv.getPost().then((posts) => this.posts = posts);
  }

  onInactivePost(id:number, i:number){
    // postSrv.updatePost({active:false}, id);
    this.posts.splice(i, 1);
  }

}
