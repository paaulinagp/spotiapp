import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loader: boolean;
  constructor(private spotifyService: SpotifyService) {
    this.loader = true;
  }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe((data) => {
      this.nuevasCanciones = data;
      this.loader = false;
    });
  }
}
