import { Component, OnInit, Input } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-moves",
  templateUrl: "./moves.component.html",
  styleUrls: ["./moves.component.css"],
})
export class MovesComponent implements OnInit {
  @Input() moves;
  showIndMoves: boolean = false;
  moveInfo: any = {};
  constructor(private appService: AppService) {}

  ngOnInit(): void {}

  dispMovesInfo(move) {
    this.appService.getPokemon(move.move.url).subscribe((data) => {
      this.moveInfo = data;
      this.showIndMoves = true;
    });
  }
}
