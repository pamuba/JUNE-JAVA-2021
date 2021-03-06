import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Video[] = [
    {"_id":"1", "title":"title1", "url":"url1", "description":"desc1"},
    {"_id":"2", "title":"title2", "url":"url2", "description":"desc2"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
