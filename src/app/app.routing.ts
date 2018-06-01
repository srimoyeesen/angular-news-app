import { HomeComponent } from './home/home.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

export const AppRoutes: any = [
    { path: '', component: HomeComponent },
    { path: 'details', component: NewsDetailsComponent },
    { path: 'details/:id', component: NewsDetailsComponent}
];

export const AppComponents: any = [
    HomeComponent,
    NewsDetailsComponent
];
