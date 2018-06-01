import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class NewsService {
  newsDetailsList;

  constructor(private _http: Http) { }

  getNews() {
    return this._http.get('../assets/news-list.json')
    ;
  }

  getNewsDetails() {
    this._http.get('../assets/news-details.json').subscribe(resNews => {
      this.newsDetailsList = resNews.json()['details'];
      return this.newsDetailsList;
    });

  }
}
