import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-general-card-display",
  templateUrl: "./general-card-display.component.html",
  styleUrls: ["./general-card-display.component.css"],
})
export class GeneralCardDisplayComponent implements OnInit {
  @Input() pokemonData;
  dispPokemon: boolean = false;
  dispPokemonData: Object = {};
  constructor() {}

  ngOnInit(): void {
    this.dispPokemonData = this.pokemonData[0];
  }
  dispPokemonCard(pokemon: Object) {
    this.dispPokemon = true;
    this.dispPokemonData = pokemon;
  }
  closeIndPokemon() {
    this.dispPokemon = false;
  }
}
