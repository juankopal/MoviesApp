import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private searchKeyUpSubject = new Subject<string>();

  searchKeyUp$ = this.searchKeyUpSubject.asObservable();

  sendSearchKeyUpEvent(value: string) {
    this.searchKeyUpSubject.next(value);
  }
}
