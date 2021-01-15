import { Component, OnInit } from '@angular/core';

import { faStar, faImage, faCalendar, faSmile, faFile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {

  faStar = faStar;
  faImage = faImage;
  faCalendar = faCalendar;
  faSmile = faSmile;
  faFile = faFile;


  constructor() { }

  ngOnInit() { }
}