import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaToHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUlr = environment.apiUlr;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  headlinesPage = 0;

  categoriaActual = '';
  categoriaPage = 0;

  constructor( private  http: HttpClient) { }

  private ejecutarQuery<T>( query: string ) {

    query = apiUlr + query;
    return this.http.get<T>( query, { headers } );
  }

  getTopHeadlines() {

    this.headlinesPage++;

    return this.ejecutarQuery<RespuestaToHeadlines>(`/top-headlines?country=us&page${this.headlinesPage}`);
// return this.http.get<RespuestaToHeadlines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=c469d35cecca4b9da008d1de67c5c887');

  }

  getTopHeadlinesCategoria(categoria: string ) {

    if ( this.categoriaActual === categoria ) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    return this.ejecutarQuery<RespuestaToHeadlines>(`/top-headlines?country=us&category=${categoria}&page=${this.categoriaPage}`);
    // return this.http.get(https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=c469d35cecca4b9da008d1de67c5c887');

  }

}


