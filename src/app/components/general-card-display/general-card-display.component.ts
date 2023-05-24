import { Component, OnInit, Input } from "@angular/core";
import { AppService } from "../app.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-general-card-display",
  templateUrl: "./general-card-display.component.html",
  styleUrls: ["./general-card-display.component.css"],
})
export class GeneralCardDisplayComponent implements OnInit {
  @Input() pokemonData;
  dispPokemon: boolean = false;
  dispPokemonData: Object = {};
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.dispPokemonData = this.pokemonData[0];
  }
  dispPokemonCard(pokemon: any) {
    if (this.appService.addingPokemon) {
      let length = this.appService.addingPokemonData.length - 1;
      let data = {
        ["member" + length]: {
          id: pokemon.extra.__zone_symbol__value.id,
          name: pokemon.name,
          type: pokemon.extra.__zone_symbol__value.types[0].type.name,
        },
      };
      this.appService
        .postPokemon(this.appService.addingPokemonData[0], data)
        .subscribe(
          (res) => {
            this.appService.addingPokemon = false;
            this.appService.addingPokemonData = [];
            this.router.navigate(["home/teams"]);
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      this.dispPokemon = true;
      this.dispPokemonData = pokemon;
    }
  }
  closeIndPokemon() {
    this.dispPokemon = false;
  }
}
