import { Component, OnInit, Input } from "@angular/core";
import { AppService } from "../app.service";
import { map } from "rxjs";

@Component({
  selector: "app-individual-pokemon",
  templateUrl: "./individual-pokemon.component.html",
  styleUrls: ["./individual-pokemon.component.css"],
})
export class IndividualPokemonComponent implements OnInit {
  @Input() pokemonData;
  evolutionData: any = {};
  filteredEvolutionData = [];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.evolution(this.pokemonData.extra.__zone_symbol__value.id);
  }
  evolution(id: number) {
    this.appService
      .getPokemon("https://pokeapi.co/api/v2/pokemon-species/" + id)
      .subscribe((data) => {
        data = Object.values(data);
        this.appService
          .getPokemon(data[4].url)
          .pipe()
          .toPromise()
          .then((res) => {
            this.filterEvolution(res.chain);
          });
      });
  }
  filterEvolution(obj) {
    this.filteredEvolutionData.push([
      obj.species.name,
      this.spliceStringUrl(obj.species.url),
    ]);
    if (obj.evolves_to) {
      this.filteredEvolutionData.push([
        obj.evolves_to[0].species.name,
        this.spliceStringUrl(obj.evolves_to[0].species.url),
      ]);
    }
    if (obj.evolves_to[0].evolves_to) {
      this.filteredEvolutionData.push([
        obj.evolves_to[0].evolves_to[0].species.name,
        this.spliceStringUrl(obj.evolves_to[0].evolves_to[0].species.url),
      ]);
    }
  }

  spliceStringUrl(str: string) {
    return str.split("/")[str.split("/").length - 2];
  }
}
