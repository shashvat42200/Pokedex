import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-upper-nav-bar",
  templateUrl: "./upper-nav-bar.component.html",
  styleUrls: ["./upper-nav-bar.component.css"],
})
export class UpperNavBarComponent implements OnInit {
  constructor(public appService: AppService, private router: Router) {}

  ngOnInit(): void {}
  changehomePage(str: string) {
    this.appService.activeHomePage = str;
    this.router.navigate(["/home/" + str]);
  }
}
