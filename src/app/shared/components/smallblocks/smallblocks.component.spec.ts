import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallblocksComponent } from './smallblocks.component';

describe('SmallblocksComponent', () => {
  let component: SmallblocksComponent;
  let fixture: ComponentFixture<SmallblocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallblocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
