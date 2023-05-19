import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  pokemonData: any = [];
  pokedexDataUrl = "https://pokeapi.co/api/v2/pokemon";
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loadPokemonData();
  }
  loadPokemonData() {
    this.appService.getPokemon(this.pokedexDataUrl).subscribe((data) => {
      this.pokemonData = Object.values(data);
      this.pokedexDataUrl = this.pokemonData[1];
      this.pokemonData = this.pokemonData[3].map((f) => {
        return {
          ...f,
          extra: this.loadType(f.url),
        };
      });
    });
  }
  loadType(url: string): any {
    return this.appService.getPokemon(url).pipe().toPromise();
  }
}
