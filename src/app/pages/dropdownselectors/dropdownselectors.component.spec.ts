import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownselectorsComponent } from './dropdownselectors.component';

describe('DropdownselectorsComponent', () => {
  let component: DropdownselectorsComponent;
  let fixture: ComponentFixture<DropdownselectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownselectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownselectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
