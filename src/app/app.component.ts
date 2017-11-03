import { Component, TemplateRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TwitterService } from './twitter.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ 'custom-styles/app.component.css' ]
})
export class AppComponent {
  searchQuery: string = '';
  tweetsData;
  expandedNewTweetBox: boolean = false;

  public modalRef: BsModalRef;

  constructor(private http: Http, private twitterService: TwitterService, private modalService: BsModalService) {
    twitterService.tweetsData$.subscribe(data => {
      this.tweetsData = data;
    });
  }

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}