import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loader: boolean;
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  buscar(search: string): void {
    this.artists = [];
    if (search) {
      this.loader = true;
      this.spotifyService.getArtists(search).subscribe((res) => {
        this.artists = res;
        this.loader = false;
      });
    }
  }
}
