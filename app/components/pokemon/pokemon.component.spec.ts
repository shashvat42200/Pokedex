import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PokemonComponent } from "./pokemon.component";
import { HttpClientModule } from "@angular/common/http";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";

describe("PokemonComponent", () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [AppService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call PokeApi", () => {
    const spy = spyOn(component, "loadPokemonData");
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
