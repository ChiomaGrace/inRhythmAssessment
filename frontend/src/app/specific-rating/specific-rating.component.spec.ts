import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificRatingComponent } from './specific-rating.component';

describe('SpecificRatingComponent', () => {
  let component: SpecificRatingComponent;
  let fixture: ComponentFixture<SpecificRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecificRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecificRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
