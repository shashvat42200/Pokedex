import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCardDisplayComponent } from './general-card-display.component';

describe('GeneralCardDisplayComponent', () => {
  let component: GeneralCardDisplayComponent;
  let fixture: ComponentFixture<GeneralCardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCardDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
