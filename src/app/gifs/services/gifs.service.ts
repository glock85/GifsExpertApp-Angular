import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = 'c7uen6ccxk2BGn0aX0MQp6UUP6APbp74';

  public resultados: any[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=c7uen6ccxk2BGn0aX0MQp6UUP6APbp74&q=${query}&limit=10`)
      .subscribe((resp: any) => {
        console.log(resp);
        this.resultados = resp.data;
      });

    console.log(this._historial);
  }

  constructor( private http: HttpClient) {}
}
