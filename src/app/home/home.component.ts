import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList = [];

  constructor(private _newsService: NewsService) {
  }

  ngOnInit() {
    this._newsService.getNews()
    .subscribe(resNews => {
      this.newsList = resNews.json()['articles'];
    });
  }

  onClickNews($event) {
     console.log($event);
  }

}
