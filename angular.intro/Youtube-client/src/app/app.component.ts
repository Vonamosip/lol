import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterComponent } from "./header/filter/filter.component";
import { SearchResultsComponent } from "./search/search-results/search-results.component";
import { HeaderComponent } from "./header/header.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FilterComponent, SearchResultsComponent, HeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'first_task';
}
