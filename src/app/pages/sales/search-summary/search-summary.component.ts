import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-summary',
  templateUrl: './search-summary.component.html',
  styleUrls: ['./search-summary.component.scss'],
})
export class SearchSummaryComponent {
  @Input() message: string = '';
}
