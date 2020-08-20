import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAW4Iqj9pheD6qQG_53Pl2gh30m1Y4UtmDEnQ1YB-um-ch5igjveKf5oWunLvNj8QE1hVUMdshdCrqjHRM',
    });
    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, {
      headers,
    });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases').pipe(
      map((res: any) => res.albums.items)
    );
  }

  getArtist(search: string): Observable<any> {
    return this.getQuery(`search?q=${search}&type=artist`).pipe(
      map((res: any) => res.artists.items)
    );
  }
}
