import { Component, OnInit } from '@angular/core';

import { faEllipsisH, faComment, faRetweet, faHeart, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.scss']
})

export class PostListComponent implements OnInit {

  faEllipsisH = faEllipsisH;
  faComment = faComment;
  faRetweet = faRetweet;
  faHeart = faHeart;
  faArrowCircleUp = faArrowCircleUp;


  constructor() { }

  ngOnInit() { }
}