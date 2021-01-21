import { Component, OnInit } from '@angular/core';

import { faCog, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: 'right-side-bar.component.html',
  styleUrls: ['right-side-bar.component.scss']
})

export class RightSideBarComponent implements OnInit {

  faCog = faCog;
  faEllipsisH = faEllipsisH;


  constructor() { }

  ngOnInit() { }
}