import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Output() sortByDate = new EventEmitter<void>();
  @Output() sortByViewCount = new EventEmitter<void>();

}
