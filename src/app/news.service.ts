import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as Rx from 'rxjs';



@Injectable()
export class NewsService {
  selectedNews;
  newsDetailsList;

  constructor(private _http: Http) { }

  getNews() {
    return this._http.get('../assets/news-list.json')
    ;
  }

  getNewsDetails() {
    return this._http.get('../assets/news-details.json');
  }
}
