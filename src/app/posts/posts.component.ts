import { Component, OnInit } from '@angular/core';
import {PostsService} from "./posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private readonly postsService: PostsService) { }

  ngOnInit(): void {
  this.fetchPosts()
  }
title = 'All posts'
  posts: any = []
  loading: boolean = false

  fetchPosts(): void {
    this.loading = true
    this.postsService.fetchPosts().subscribe({
      next: (response) => {
        this.posts = response
        this.loading = false
      },
      error: (error) => {
        console.log(error);
        this.loading = false
      },
      complete: () => {
        this.loading = false
        console.log('Done fetching data')
      }
    });
  }

}
