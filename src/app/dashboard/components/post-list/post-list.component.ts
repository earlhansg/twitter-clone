import { Component, OnInit } from '@angular/core';

import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.scss']
})

export class PostListComponent implements OnInit {

  faEllipsisH = faEllipsisH;


  constructor() { }

  ngOnInit() { }
}