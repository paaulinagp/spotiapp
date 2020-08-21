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
        'Bearer BQAXB2fVZkhfK2JkHxhbqJ2WiiPnUJ9DFcAWYWqbLnegcN_Ft0X5SDK6diRdWufHguZMjEyumy50uCa-4Q0',
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
