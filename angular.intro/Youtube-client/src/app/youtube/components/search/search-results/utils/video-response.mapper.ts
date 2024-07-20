import { YoutubeVideoStatistics } from "../../../../../shared/interfaces/data.interface";
import { VideoCard } from "../../../../../shared/interfaces/VideoCard.inteface";


export function videoResponseMapper(item: {
  id: string; statistics: YoutubeVideoStatistics; snippet: { description: string; thumbnails: { standard: { url: string; }; }; publishedAt: string; title: string; };
}): VideoCard {
  return ({
    id:item.id,
    statistics: item.statistics,
    description: item.snippet.description,
    imageUrl: item.snippet.thumbnails.standard.url,
    publishedAt: item.snippet.publishedAt,
    title: item.snippet.title,
  })
}
