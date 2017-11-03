import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TwitterService {
  searchQuery: string = '';
  private tweetsData = new BehaviorSubject<any[]>(null);
  public tweetsData$ = this.tweetsData.asObservable();

  constructor(private http: Http) {
    console.log('TwitterService created');
    this.getBearerToken();
  }

  getBearerToken() {
    // get bearer token from twitter api
    var headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:3000/authorize', {headers: headers}).subscribe((res) => {
      console.log(res);
    });
  }

  getTweetsData():Observable<any[]> {
    return this.tweetsData;
  }

  searchCall() {
    console.log('searchCall made');
    console.log(this.searchQuery);
    var headers = new Headers();
    var searchTerm = 'query=' + this.searchQuery;

    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post('http://localhost:3000/search', searchTerm, {headers: headers}).subscribe((res) => {
      this.tweetsData.next(res.json().data.statuses);
    });
  }

}