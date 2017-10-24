import { Component, TemplateRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ 'custom-styles/app.component.css' ]
})
export class AppComponent {
  searchQuery = '';
  tweetsdata;

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService, private http: Http) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  makeCall() {
    var headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res)
    });
  }

  searchCall() {
    var headers = new Headers();
    var searchTerm = 'query=' + this.searchQuery;

    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:3000/search', searchTerm, {headers: headers}).subscribe((res) => {
      this.tweetsdata = res.json().data.statuses;
    });
  }

  expandedNewTweetBox: boolean = false;
}