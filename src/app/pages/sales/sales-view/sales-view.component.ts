import { Component, Input, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales-view',
  templateUrl: './sales-view.component.html',
  styleUrls: ['./sales-view.component.scss'],
})
export class SalesViewComponent {
  @Input() salesList: Sale[] = [];

  @Input() isLoading = false;

  // SaleSeleccionada: Sale | null = null;

  posterPathRoot = 'https://image.tmdb.org/t/p/w185/';
}
