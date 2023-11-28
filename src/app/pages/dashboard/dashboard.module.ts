import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SalesService } from 'src/app/services/sales.service';
import { BannerComponent } from './banner/banner.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [HomepageComponent, BannerComponent, DashboardDataComponent],
  imports: [CommonModule],
  providers: [SalesService],
  exports: [HomepageComponent],
})
export class DashboardModule {}
