import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExplorerComponent } from './explorer/explorer.component';
import { FilterComponent } from './filter/filter.component';
import { SalesViewComponent } from './sales-view/sales-view.component';
import { SearchSummaryComponent } from './search-summary/search-summary.component';

@NgModule({
  declarations: [
    ExplorerComponent,
    FilterComponent,
    SearchSummaryComponent,
    SalesViewComponent,
  ],
  imports: [CommonModule],
  exports: [ExplorerComponent],
})
export class SalesModule {}
