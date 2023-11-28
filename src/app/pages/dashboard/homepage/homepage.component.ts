import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  salesList: Sale[] = [];
  ticketsTotal: number = 0;
  salesTotal: number = 0;
  moviesTotal: number = 0;

  constructor(private data: SalesService) {}

  ngOnInit(): void {
    this.getSalesList();
    this.getDashboardData();
  }

  private getSalesList() {
    this.data.getSalesList().subscribe((sales) => {
      this.salesList = sales;
    });
  }

  private getDashboardData() {
    this.data.getSalesList().subscribe((sales) => {
      this.moviesTotal = sales.length;

      sales.forEach((sale) => {
        this.ticketsTotal += sale.tickets_sold;
        this.salesTotal += sale.total_sales;
      });
    });
  }
}
