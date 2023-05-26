import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GeneralCardDisplayComponent } from "./general-card-display.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";

describe("GeneralCardDisplayComponent", () => {
  let component: GeneralCardDisplayComponent;
  let fixture: ComponentFixture<GeneralCardDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [GeneralCardDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component.pokemonData).toBeDefined();
  });
});
