import { Component, OnInit, Input , Output,  EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem;
  @Output() newsClickEvent = new EventEmitter();
  truncatedDescription;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.truncatedDescription = this.newsItem.description;
  }

  onNewsClick(newsItem) {
    this.router.navigate(['details', newsItem.newsID]);
  }


}
