import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject: Subject<string> = new BehaviorSubject<string>('');
  search$: Observable<string> = this.searchSubject.asObservable();

  search(searchText: string): void {
    this.searchSubject.next(searchText);
  }
}
