import { Component, TemplateRef } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { TwitterService } from './twitter.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./custom-styles/navbar.component.css']
})
export class NavbarComponent {
  newTweetTextbox: string = '';
  maxTweetLength: number = 140;
  searchQuery: string = '';
  tweetsData;

  public modalRef: BsModalRef;
  constructor(private http: Http, private twitterService:TwitterService, private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}