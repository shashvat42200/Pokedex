import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-general-card-display",
  templateUrl: "./general-card-display.component.html",
  styleUrls: ["./general-card-display.component.css"],
})
export class GeneralCardDisplayComponent implements OnInit {
  @Input() pokemonData;
  constructor() {}

  ngOnInit(): void {}
  load() {
    console.log(this.pokemonData);
  }
}
