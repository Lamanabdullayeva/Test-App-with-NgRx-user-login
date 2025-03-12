import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { concatMap, from, mergeMap, Observable } from 'rxjs';

@Component({
  selector: 'app-parallel-search',
  imports: [],
  templateUrl: './parallel-search.component.html',
  styleUrl: './parallel-search.component.scss',
})
export class ParallelSearchComponent {
  private http = inject(HttpClient);

  private userIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
    from(this.userIds)
      .pipe(mergeMap((id) => this.fetchUsers(id))) // ✅ Runs all calls in parallel
      // .pipe(concatMap((id) => this.fetchUsers(id))) // ✅ Runs requests in order
      .subscribe((user) => console.log(user)),
      (err: Error) => console.log(err.message);
  }

  fetchUsers(id: number): Observable<any> {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
