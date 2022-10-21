import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../posts/posts.service";
import {Post} from "../posts/post";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(
    private readonly postsService: PostsService,
    private route: ActivatedRoute,
    // private router: Router
  ) { }

private postId: any
 post: any
  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('postId');
    this.fetchPost(this.postId)
  }


  posts: any = []
  loading: boolean = false

  fetchPost(id: number) {
    this.loading = true
    this.postsService.fetchPost(id).subscribe({
      next: (response) => {
        this.post = response
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
