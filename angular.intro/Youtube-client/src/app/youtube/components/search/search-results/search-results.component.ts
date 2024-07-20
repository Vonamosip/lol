import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import  response  from '../../../../assets/response.json';
import { FilterComponent } from '../../../../core/components/header/components/search/filter/filter.component';
import { FilterService } from '../../../../core/services/search-services/filter.service';
import { SearchService } from '../../../../core/services/search-services/search.service';
import { Filters } from '../../../../shared/enums/filters.enums';
import { VideoCard } from '../../../../shared/interfaces/VideoCard.inteface';
import { NumberShortenerPipe } from '../../../pipes/number-shortener.pipe';
import { SearchPipe } from '../../../pipes/search.pipe';
import { SortResultsPipe } from '../../../pipes/sort-results.pipe';
import { videoResponseMapper } from './utils/video-response.mapper';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [NumberShortenerPipe, SortResultsPipe, FilterComponent, SearchPipe,RouterOutlet,RouterModule],
})
export class SearchResultsComponent implements OnInit {
  private readonly filterService = inject(FilterService);
  private readonly searchService = inject(SearchService);
  private readonly destroyRef = inject(DestroyRef);

  videoCards!: VideoCard[];
  showSortMenu: boolean = false; // Property to toggle sort menu
  videosFilter: Filters | null = null;
  searchText: string = '';


  constructor(private router: Router,  private route:ActivatedRoute){}

  public  redirectTo(id:number):void{
    this.router.navigate([`${id}`], {relativeTo:this.route})
  }
  ngOnInit(): void {
    this.initializeListeners();

    this.videoCards = response.items.map(videoResponseMapper);
  }

  private initializeListeners(): void {
    this.filterService.filter$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((filter) => {
        this.videosFilter = filter;
      });

    this.searchService.search$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((searchText) => {
        this.searchText = searchText;
      });
  }

  getStatusColor(publishedAt: string): string {
    const date = new Date(publishedAt);
    const currentDate = new Date();
    const differenceInDays = this.differenceInDays(currentDate, date);

    if (differenceInDays > 180) {
      return '#FF0000'; // Red color if older than 6 months
    } else if (differenceInDays >= 30 && differenceInDays <= 180) {
      return '#FFD700'; // Yellow color if between 1 and 6 months
    } else if (differenceInDays >= 7 && differenceInDays < 30) {
      return '#00FF00'; // Green color if between 7 days and 1 month
    } else {
      return '#1E90FF'; // Blue color if newer than 7 days
    }
  }

  private differenceInDays(currentDate: Date, previousDate: Date): number {
    const diffInMs = Math.abs(currentDate.getTime() - previousDate.getTime());
    return Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  }
}

