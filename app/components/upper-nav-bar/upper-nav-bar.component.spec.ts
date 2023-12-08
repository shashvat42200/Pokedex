import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UpperNavBarComponent } from "./upper-nav-bar.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe("UpperNavBarComponent", () => {
  let component: UpperNavBarComponent;
  let fixture: ComponentFixture<UpperNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [UpperNavBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
