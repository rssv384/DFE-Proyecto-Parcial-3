import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ErrorPagesModule } from './pages/error-pages/error-pages.module';
import { SalesModule } from './pages/sales/sales.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // Custom modules
    DashboardModule,
    SalesModule,
    ErrorPagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
