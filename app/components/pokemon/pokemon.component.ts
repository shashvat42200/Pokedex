import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-pokemon",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"],
})
export class PokemonComponent implements OnInit {
  pokemonData: any = [];
  filtertype = "";
  dataReceived: boolean = false;
  pokedexDataUrl = "https://pokeapi.co/api/v2/pokemon?limit=21";
  urlArray = [];
  constructor(private appService: AppService) {}
  ngOnInit(): void {
    this.loadPokemonData();
  }
  loadPokemonData() {
    this.dataReceived = false;
    this.appService.getPokemon(this.pokedexDataUrl).subscribe((data) => {
      this.pokemonData = Object.values(data);
      if (this.urlArray.includes(this.pokedexDataUrl) === false)
        this.urlArray.push(this.pokedexDataUrl);
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
  loadPrevious() {
    this.pokedexDataUrl = this.urlArray[this.urlArray.length - 2];
    this.urlArray.splice(this.urlArray.length - 1, 1);
    this.loadPokemonData();
  }
  changeFiltertype(str) {
    console.log(str);
    this.filtertype = str;
  }
}
