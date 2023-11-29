import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  isLoading = false;

  salesList: Sale[] = [];

  constructor(private data: SalesService) {}

  ngOnInit() {
    this.getSalesList();
  }

  get message(): string {
    if (this.isLoading) {
      return 'Loading...';
    } else {
      return this.salesList.length > 0
        ? `${this.salesList.length} sales record(s) have been found.`
        : 'No sales records were found.';
    }
  }

  private getSalesList() {
    this.isLoading = true;

    this.data.getSalesList().subscribe((x) => {
      this.isLoading = false;
      this.salesList = x;
    });
  }
}
