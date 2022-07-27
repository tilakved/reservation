import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsinfoComponent } from './mealsinfo.component';

describe('MealsinfoComponent', () => {
  let component: MealsinfoComponent;
  let fixture: ComponentFixture<MealsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
