
import { Component } from '@angular/core';
import  response  from '../../assets/response.json';
import { YoutubeVideoStatistics } from '../interfaces/data.interface';
import { NumberShortenerPipe } from "../../pipes/number-shortener.pipe";
@Component({
    selector: 'app-search-results',
    standalone: true,
    templateUrl: './search-results.component.html',
    styleUrl: './search-results.component.scss',
    imports: [NumberShortenerPipe]
})
export class SearchResultsComponent {
  statistics: YoutubeVideoStatistics[];
  imageUrl: string[];
  date:string[];
  constructor() {
    this.date = response.items.map(item => item.snippet.publishedAt);
    this.statistics = response.items.map(item => item.statistics);
    this.imageUrl = response.items.map(item => item.snippet.thumbnails.standard.url);
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
