import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
	declarations: [
		HomepageComponent,
		BannerComponent,
		DashboardDataComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		HomepageComponent
	],
})
export class DashboardModule { }
