import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-individual-pokemon",
  templateUrl: "./individual-pokemon.component.html",
  styleUrls: ["./individual-pokemon.component.css"],
})
export class IndividualPokemonComponent implements OnInit {
  @Input() pokemonData;
  constructor() {}

  ngOnInit(): void {}
}
