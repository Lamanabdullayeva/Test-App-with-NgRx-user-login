import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { debounceTime, Observable, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-live-search',
  imports: [],
  templateUrl: './live-search.component.html',
  styleUrl: './live-search.component.scss',
})
export class LiveSearchComponent {
  private http = inject(HttpClient);
  private searchSubject = new Subject<string>();
  users: any[] = [];

  constructor() {
    this.searchSubject
      .pipe(
        debounceTime(400),
        switchMap((term) => this.fetchUsers(term))
      )
      .subscribe((users) => (this.users = users));
  }

  fetchUsers(term: string): Observable<any[]> {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/users?name_like=${term}`
    );
  }

  onSearch(event: any) {
    this.searchSubject.next(event.target.value);
  }
}
