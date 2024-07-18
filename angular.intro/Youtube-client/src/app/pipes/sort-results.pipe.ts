import { Pipe, PipeTransform } from '@angular/core';
import { FilteredSearchResult } from '../search/interfaces/search-result.inteface';
import { YoutubeVideoStatistics } from '../search/interfaces/data.interface';

@Pipe({
  name: 'sortResults',
  standalone: true
})
export class SortResultsPipe implements PipeTransform {
  transform(results: YoutubeVideoStatistics[], sortBy: string): YoutubeVideoStatistics[] {
    if (sortBy === 'viewCount') {
      return results.sort((a, b) => parseInt(b.viewCount) - parseInt(a.viewCount));
    } else {
      // Return original results if sortBy is not recognized
      return results;
    }
  }
}
