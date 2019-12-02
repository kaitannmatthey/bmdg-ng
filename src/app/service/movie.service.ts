import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response';
import { Movie } from '../model/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url: string = "http://localhost:8080/movies/"; // this sets the url we'll refer to later

  /* 
    The HttpClient in @angular/common/http offers a simplified client HTTP API for Angular 
    applications that rests on the XMLHttpRequest interface exposed by browsers. Additional 
    benefits of HttpClient include testability features, typed request and response objects, 
    request and response interception, Observable apis, and streamlined error handling.
  
    Having imported HttpClientModule into the AppModule, 
    you can inject the HttpClient into an application class
  */
  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }
  
  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url + id) as Observable<JsonResponse>;
  }
  
  save(movie: Movie): Observable<JsonResponse> {
    return this.http.post(this.url, movie) as Observable<JsonResponse>;
  }
  
  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(this.url + id) as Observable<JsonResponse>;
  }
}
