import { Component, OnInit, Input , AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../news.service';
import * as _ from 'underscore';
import * as moment from 'moment';


@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit, AfterViewInit {

  newsId: Number;
  newsDetailsList;
  selectedNews;
  ImageUrlList;
  publishedAt;

  constructor(private _route: ActivatedRoute, private _newsService: NewsService) { }

  ngOnInit() {
    this.newsId = this._route.snapshot.params['id'];
    let id = this.newsId;
    // this.newsDetailsList = this._newsService.getNewsDetails();
    this._newsService.getNewsDetails()
       .subscribe(resNews => {
         this.newsDetailsList = resNews.json()['details'];
        this.selectedNews = this.newsDetailsList.find(function(data) {
          return data.newsID === id;
        });
        this.ImageUrlList = this.selectedNews.urlToImage;
        this.publishedAt = moment(this.selectedNews.publishedAt).format('MMMM Do YYYY, h:mm:ss a');
      });
  }

  ngAfterViewInit(): void {
  }

}
