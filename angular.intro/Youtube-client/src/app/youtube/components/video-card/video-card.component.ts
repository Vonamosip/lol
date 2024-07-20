import { VideoCard } from './../../../shared/interfaces/VideoCard.inteface';


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterOutlet } from '@angular/router';
import  response  from '../../../assets/response.json';
import { VideoCardService } from '../../services/videoCard.service';
import { videoResponseMapper } from '../search/search-results/utils/video-response.mapper';
import { HeaderComponent } from "../../../core/components/header/header.component";

@Component({
    selector: 'app-video-card',
    standalone: true,
    imports: [
    RouterOutlet,
    HeaderComponent
],
    templateUrl: './video-card.component.html',
    styleUrl: './video-card.component.scss',
})
export class VideoCardComponent implements OnInit{
  public objectInfo?: VideoCard;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const videoCards: VideoCard[] = response.items.map(videoResponseMapper);

    this.route.params.subscribe(params => {
      const videoId = params['id'];

      this.objectInfo = videoCards.find(card => card.id === videoId);
    });
  }

}
