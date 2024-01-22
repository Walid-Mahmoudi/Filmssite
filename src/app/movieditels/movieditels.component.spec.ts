import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieditelsComponent } from './movieditels.component';

describe('MovieditelsComponent', () => {
  let component: MovieditelsComponent;
  let fixture: ComponentFixture<MovieditelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieditelsComponent]
    });
    fixture = TestBed.createComponent(MovieditelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
