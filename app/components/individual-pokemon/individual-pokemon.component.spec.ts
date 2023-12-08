import { ComponentFixture, TestBed } from "@angular/core/testing";

import { IndividualPokemonComponent } from "./individual-pokemon.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import { GeneralCardDisplayComponent } from "../general-card-display/general-card-display.component";

describe("IndividualPokemonComponent", () => {
  let component: IndividualPokemonComponent;
  let generalComponent: GeneralCardDisplayComponent;
  let fixture: ComponentFixture<IndividualPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [IndividualPokemonComponent, GeneralCardDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
