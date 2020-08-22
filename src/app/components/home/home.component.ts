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
  error: boolean;
  errorMensaje: string;
  constructor(private spotifyService: SpotifyService) {
    this.error = false;
    this.loader = true;
  }

  ngOnInit(): void {
    this.spotifyService.getNewReleases().subscribe(
      (data) => {
        this.nuevasCanciones = data;
        this.loader = false;
      },
      (error) => {
        this.loader = false;
        this.error = true;
        this.errorMensaje = error.error.error.message;
      }
    );
  }
}
