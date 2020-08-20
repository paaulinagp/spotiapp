import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  buscar(search: string): void {
    console.log(search);

    this.spotifyService.getArtist(search).subscribe((res) => {
      console.log(res.artists.items);
      this.artists = res.artists.items;
    });
  }
}
