import { Component, OnInit } from '@angular/core';

import {
  faHome, faHashtag, faBell, faBookmark, faEnvelope,
  faList, faUser, faEllipsisH, faKiwiBird, faPencilAlt
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrls: ['side-bar.component.scss']
})

export class SideBarComponent implements OnInit {

  faKiwiBird = faKiwiBird;
  faHome = faHome;
  faHashtag = faHashtag;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faBookmark = faBookmark;
  faList = faList;
  faUser = faUser;
  faEllipsisH = faEllipsisH;
  faPencilAlt = faPencilAlt;


  constructor() { }

  ngOnInit() { }
}