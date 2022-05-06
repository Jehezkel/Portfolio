import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Post } from '../../post.model';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  // providers: [ApiService],
})
export class PostListComponent implements OnInit {
  loading: boolean = true;
  postList: Post[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllPosts().subscribe((data) => {
      this.loading = false;
      this.postList = data;
    });
  }
}
