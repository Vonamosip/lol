import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../core/components/header/header.component";
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FilterComponent } from '../../../core/components/header/components/search/filter/filter.component';
import { SearchResultsComponent } from '../search/search-results/search-results.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FilterComponent, SearchResultsComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isVideoCardRoute = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        this.isVideoCardRoute = event.url.includes('/main/') && !event.url.includes('/main');
      }
    });
  }
}
