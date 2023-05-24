import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-teams",
  templateUrl: "./teams.component.html",
  styleUrls: ["./teams.component.css"],
})
export class TeamsComponent implements OnInit {
  teamsUrl = "https://pokedex-app-c8934-default-rtdb.firebaseio.com/teams.json";
  teamsData: any = [];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loadTeams();
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
      console.log(this.teamsData);
    });
  }
}
