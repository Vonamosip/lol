import { YoutubeVideoStatistics } from "./data.interface";

export interface VideoCard {
  statistics: YoutubeVideoStatistics;
  imageUrl: string;
  publishedAt: string;
}
