import { Component, OnInit, Input } from "@angular/core";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { error } from "console";

@Component({
  selector: "app-teams-card",
  templateUrl: "./teams-card.component.html",
  styleUrls: ["./teams-card.component.css"],
})
export class TeamsCardComponent implements OnInit {
  @Input() teamdata;
  dispTeam: boolean = false;
  deletebtn: boolean = false;
  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dispTeam = true;
    }, 500);
  }
  addPokemon(uid) {
    this.appService.addingPokemonData = this.teamdata;
    this.appService.addingPokemon = true;
    this.router.navigate(["/home/pokemon"]);
  }
  deletePokemon(uid, id, index) {
    this.appService.deletePokemon(uid, id).subscribe((err) => console.log(err));
    this.teamdata.splice(index + 1, 1);
    this.deletebtn = false;
  }
}
