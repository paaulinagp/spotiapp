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
        'Bearer BQAlU8KUtCZijifNYgwZCOiJz4EdX_oqJfxE-e0UcRe1Qc2L58TFJHxe7gW3H4eJrgS5INhVzKsrjjZnGpw',
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

  getArtists(search: string): Observable<any> {
    return this.getQuery(`search?q=${search}&type=artist`).pipe(
      map((res: any) => res.artists.items)
    );
  }

  getArtist(id: string): Observable<any> {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string): Observable<any> {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((res: any) => res.tracks)
    );
  }
}
