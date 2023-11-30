import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieStatus } from 'src/app/models/sale';
import { SearchParams } from 'src/app/models/search-params';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  // Store filter form inputs when submitted
  private filters: SearchParams = {};

  // Event emitters to send to ExplorerComponent
  @Output() filterParamsEvent = new EventEmitter<SearchParams>();

  processFilters(movieTitle: string, status: string, releaseDate: string) {
    this.filters = {
      movie_title: movieTitle,
      status: status,
      release_date: releaseDate,
    };

    this.filterParamsEvent.emit(this.filters);
  }
}
