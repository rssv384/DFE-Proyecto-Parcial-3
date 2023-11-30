import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Sale } from '../models/sale';

const API_PATH = 'https://652febab6c756603295deff5.mockapi.io/api/sales';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor(private http: HttpClient) {}

  getSalesList(): Observable<Sale[]> {
    return this.http.get<Sale[]>(API_PATH);
  }

  getFilteredSalesList(searchParams: HttpParams): Observable<Sale[]> {
    let options = {
      params: searchParams,
    };
    return this.http.get<Sale[]>(API_PATH, options);
  }
}
