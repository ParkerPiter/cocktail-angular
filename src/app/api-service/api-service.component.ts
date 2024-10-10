import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php';

  constructor(private http: HttpClient) {}

  getDrink(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?i=${id}`);
  }
}
