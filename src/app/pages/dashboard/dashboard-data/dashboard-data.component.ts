import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.scss'],
})
export class DashboardDataComponent {
  @Input() ticketsTotal: number = 0;
  @Input() salesTotal: number = 0;
  @Input() moviesTotal: number = 0;
}
