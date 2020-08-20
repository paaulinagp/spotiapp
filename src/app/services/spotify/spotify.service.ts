import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases(): void {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAW4Iqj9pheD6qQG_53Pl2gh30m1Y4UtmDEnQ1YB-um-ch5igjveKf5oWunLvNj8QE1hVUMdshdCrqjHRM',
    });
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
