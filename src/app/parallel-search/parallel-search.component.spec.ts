import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelSearchComponent } from './parallel-search.component';

describe('ParallelSearchComponent', () => {
  let component: ParallelSearchComponent;
  let fixture: ComponentFixture<ParallelSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallelSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
