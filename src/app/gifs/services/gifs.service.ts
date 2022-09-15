import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = 'c7uen6ccxk2BGn0aX0MQp6UUP6APbp74';

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    console.log(this._historial);
  }

  constructor() {}
}
