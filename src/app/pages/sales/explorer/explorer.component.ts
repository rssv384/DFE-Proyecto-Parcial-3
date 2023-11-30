import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale';
import { SearchParams } from 'src/app/models/search-params';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss'],
})
export class ExplorerComponent implements OnInit {
  isLoading = false; // Is loading sales records?
  salesList: Sale[] = [];
  filterParams: SearchParams = {};

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

  filterSalesList(filterParams: SearchParams) {
    let queryParams = new HttpParams();

    if (filterParams.movie_title) {
      queryParams = queryParams.append('movie_title', filterParams.movie_title);
    }

    if (filterParams.status) {
      queryParams = queryParams.append('status', filterParams.status);
    }

    if (filterParams.release_date) {
      queryParams = queryParams.append(
        'release_date',
        filterParams.release_date
      );
    }

    if (queryParams) {
      this.data.getFilteredSalesList(queryParams).subscribe((x) => {
        this.isLoading = false;
        this.salesList = x;
      });
    }
  }
}
