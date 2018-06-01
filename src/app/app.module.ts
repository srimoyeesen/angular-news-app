import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponents, AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpModule } from '@angular/http';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

import { DateFormatterDirective } from './app.dateFormatter';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsItemComponent,
    NewsDetailsComponent,
    DateFormatterDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
