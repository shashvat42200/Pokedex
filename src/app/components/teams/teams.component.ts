import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { user } from "src/app/user-state/selector/user.selector";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.css"],
})
export class TeamsComponent implements OnInit {
  teamsUrl = "https://pokedex-app-c8934-default-rtdb.firebaseio.com/teams.json";
  teamsData: any = [];
  createdBy: any = "";
  constructor(
    private appService: AppService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.loadTeams();
    this.store.select(user).subscribe((data) => {
      this.createdBy = data.email;
    });
  }
  loadTeams() {
    this.appService.getPokemon(this.teamsUrl).subscribe((data) => {
      this.teamsData = Object.keys(data).map((f) => {
        return [
          f,
          ...Object.keys(data[f]).map((i) => {
            return [i, data[f][i]];
          }),
        ];
      });
    });
  }
  addTeam() {
    let create = {
      createdBy: this.createdBy,
    };
    this.appService.postTempTeam(JSON.stringify(create)).subscribe((data) => {
      this.appService.tempUID = data.name;
    });
    this.appService.addingPokemon = true;
    this.router.navigate(["home/pokemon"]);
  }
}
