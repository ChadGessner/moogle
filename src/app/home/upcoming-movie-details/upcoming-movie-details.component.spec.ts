import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMovieDetailsComponent } from './upcoming-movie-details.component';

describe('UpcomingMovieDetailsComponent', () => {
  let component: UpcomingMovieDetailsComponent;
  let fixture: ComponentFixture<UpcomingMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingMovieDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
