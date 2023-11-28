import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Sale } from '../models/sale';

const API_PATH = 'https://652febab6c756603295deff5.mockapi.io/api/';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  constructor(private http: HttpClient) {}

  getSalesList(): Observable<Sale[]> {
    const url = API_PATH + 'sales';

    return this.http.get<Sale[]>(url);
  }
}
