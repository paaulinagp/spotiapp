import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.css'],
})
export class ArtistasComponent implements OnInit {
  loader: boolean;
  artista: any = {};
  tracks: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.activatedRoute.params.subscribe((params: any) => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  ngOnInit(): void {}

  getArtista(id: string): void {
    this.loader = true;
    this.spotifyService.getArtist(id).subscribe((artista) => {
      this.artista = artista;
      this.loader = false;
      console.log(artista);
    });
  }

  getTopTracks(id: string): void {
    this.spotifyService.getTopTracks(id).subscribe((tracks) => {
      this.tracks = tracks;
      console.log(tracks);
    });
  }
}
