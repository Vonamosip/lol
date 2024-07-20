import { Routes } from '@angular/router';
import { ErrorPageComponent } from './core/components/ErrorPage/ErrorPage.component';
import { MainComponent } from './youtube/components/main/main.component';
import { LoginComponent } from './auth/components/login/login.component';
import { authGuard } from './core/guards/auth-guard.guard';
import { VideoCardComponent } from './youtube/components/video-card/video-card.component';
import { SearchResultsComponent } from './youtube/components/search/search-results/search-results.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [authGuard],
  },
  {
    path: ':id',
    component: VideoCardComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    component: ErrorPageComponent,
    canActivate: [authGuard]
  }
];
