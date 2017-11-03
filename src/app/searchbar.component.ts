import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'searchbar',
  template: `
    <div class="input-group">
      <input id="searchbar" type="text" class="form-control" placeholder="Search Chiller" aria-label="Search Chiller" [(ngModel)]="searchQuery" [ngModelOptions]="{standalone: true}">
      <span class="input-group-btn">
        <button class="btn btn-secondary" type="button" (click)="searchCall()">Go!</button>
      </span>
    </div>
    <div *ngFor="let item of tweetsData" class="col-12">
      <div class="card">
        <div class="card-image">
          <img style="width: 100px; height: 100px;" src={{item.user.profile_image_url}}>
        </div>
        <div class="right-content">
          <span class="card-title">{{ item.user.name }}</span>
          <div class="card-content">
            <p>{{ item.text }}</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  `,
})

export class SearchbarComponent implements OnInit {
  searchQuery: string = '';
  tweetsData;
  expandedNewTweetBox: boolean = false;

  constructor(private http: Http) {}

  ngOnInit() {
    // get bearer token from twitter api
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
      this.tweetsData = res.json().data.statuses;
    });
  }
}