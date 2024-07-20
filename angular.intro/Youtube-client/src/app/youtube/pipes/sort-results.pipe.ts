import { Pipe, PipeTransform } from '@angular/core';
import { VideoCard } from '../../shared/interfaces/VideoCard.inteface';
import { Filters } from '../../shared/enums/filters.enums';


@Pipe({
  name: 'sortResults',
  standalone: true
})
export class SortResultsPipe implements PipeTransform {
  transform(results: VideoCard[], sortBy: Filters | null): VideoCard[] {
    if (!results || !sortBy) {
      return results;
    }

    return results.sort((a, b) => {
      switch (sortBy) {
        case Filters.BY_DATE:
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case Filters.BY_VIEWS:
          return parseInt(b.statistics.viewCount, 10) - parseInt(a.statistics.viewCount, 10);
      }
    });
  }
}
