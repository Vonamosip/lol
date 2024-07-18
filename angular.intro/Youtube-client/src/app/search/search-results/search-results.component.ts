import { Component } from '@angular/core';
import response from '../../assets/response.json';
import { NumberShortenerPipe } from "../../pipes/number-shortener.pipe";
import { SortResultsPipe } from "../../pipes/sort-results.pipe";
import { FilterComponent } from "../../header/filter/filter.component";
import { VideoCard } from '../interfaces/VideoCard.inteface';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  standalone: true,
  imports: [NumberShortenerPipe, SortResultsPipe, FilterComponent]
})
export class SearchResultsComponent {
  videoCards: VideoCard[];
  showSortMenu: boolean = false; // Property to toggle sort menu

  constructor() {
    this.videoCards = response.items.map(item => ({
      statistics: item.statistics,
      imageUrl: item.snippet.thumbnails.standard.url,
      publishedAt: item.snippet.publishedAt
    }));
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

  sortByViews() {
    console.log("Sorting by views - handler called");
    this.videoCards.sort((a, b) => {
      const viewCountA = parseInt(a.statistics.viewCount);
      const viewCountB = parseInt(b.statistics.viewCount);
      return viewCountB - viewCountA;
    });
  }

  sortByDate() {
    console.log("Sorting by date - handler called");
    this.videoCards.sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return dateB - dateA;
    });
  }

  resetSort() {
    this.videoCards = response.items.map(item => ({
      statistics: item.statistics,
      imageUrl: item.snippet.thumbnails.standard.url,
      publishedAt: item.snippet.publishedAt
    })); // Restore original order
  }

  onSortByDate() {

    this.sortByDate();
  }

  onSortByViews() {

    this.sortByViews();
  }
}
