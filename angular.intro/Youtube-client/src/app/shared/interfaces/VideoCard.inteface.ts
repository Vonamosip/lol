  import { YoutubeVideoStatistics } from "./data.interface";

  export interface VideoCard {
    id:string;
    statistics: YoutubeVideoStatistics;
    description:string;
    imageUrl: string;
    publishedAt: string;
    title: string;
  }
