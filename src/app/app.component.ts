import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { LiveSearchComponent } from './live-search/live-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LiveSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'test-app';

  data$!: Observable<any>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.data$ = this.apiService.fetchData();
  }
}
