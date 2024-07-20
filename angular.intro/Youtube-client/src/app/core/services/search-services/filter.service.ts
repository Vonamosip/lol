import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Filters } from '../../../shared/enums/filters.enums';


@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterSubject: Subject<Filters | null> = new Subject<Filters | null>();
  filter$: Observable<Filters | null> = this.filterSubject.asObservable();

  setFilter(filter: Filters): void {
    this.filterSubject.next(filter);
  }
}
