import { Component, inject } from '@angular/core';
import { SearchComponent } from '../search.component';
import { FilterService } from '../../../../../services/search-services/filter.service';
import { Filters } from '../../../../../../shared/enums/filters.enums';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  private readonly filterService = inject(FilterService);

  sortByDate(): void {
    this.filterService.setFilter(Filters.BY_DATE);
  }

  sortByViewCount(): void {
    this.filterService.setFilter(Filters.BY_VIEWS);
  }
}
