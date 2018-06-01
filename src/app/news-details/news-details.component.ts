import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  newsId: Number;
  newsDetailsList;
  selectedNews;

  constructor(private _route: ActivatedRoute, private _newsService: NewsService) { }

  ngOnInit() {
    this.newsDetailsList = this._newsService.getNewsDetails();
    console.log(this.newsDetailsList);
    this.newsId = this._route.snapshot.params['id'];
  }


}
