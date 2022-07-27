import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsmenuComponent } from './mealsmenu.component';

describe('MealsmenuComponent', () => {
  let component: MealsmenuComponent;
  let fixture: ComponentFixture<MealsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
