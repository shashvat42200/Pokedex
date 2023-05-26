import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TeamsCardComponent } from "./teams-card.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";

describe("TeamsCardComponent", () => {
  let component: TeamsCardComponent;
  let fixture: ComponentFixture<TeamsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, StoreModule.forRoot({})],
      declarations: [TeamsCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
