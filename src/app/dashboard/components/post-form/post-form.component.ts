import { Component, OnInit } from '@angular/core';

import { faImage, faCalendar, faSmile, faFile } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post-form',
  templateUrl: 'post-form.component.html',
  styleUrls: ['post-form.component.scss']
})

export class PostFormComponent implements OnInit {

  faImage = faImage;
  faCalendar = faCalendar;
  faSmile = faSmile;
  faFile = faFile;


  constructor() { }

  ngOnInit() { }
}