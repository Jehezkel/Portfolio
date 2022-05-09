import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() postObject: Post=new Post();
  constructor() { }

  ngOnInit(): void {
  }

}
