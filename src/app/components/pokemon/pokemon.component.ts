import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"],
})
export class PokemonComponent implements OnInit {
  pokemonData: any = [];
  dataReceived: boolean = false;
  pokedexDataUrl = "https://pokeapi.co/api/v2/pokemon";
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loadPokemonData();
  }
  loadPokemonData() {
    this.dataReceived = false;
    this.appService.getPokemon(this.pokedexDataUrl).subscribe((data) => {
      this.pokemonData = Object.values(data);
      this.pokedexDataUrl = this.pokemonData[1];
      this.pokemonData = this.pokemonData[3].map((f) => {
        return {
          ...f,
          extra: this.loadType(f.url),
        };
      });
      setTimeout(() => (this.dataReceived = true), 500);
    });
  }
  loadType(url: string): any {
    return this.appService.getPokemon(url).pipe().toPromise();
  }
}
