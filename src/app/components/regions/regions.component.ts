import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-regions",
  templateUrl: "./regions.component.html",
  styleUrls: ["./regions.component.css"],
})
export class RegionsComponent implements OnInit {
  regionUrl = "https://pokeapi.co/api/v2/region?limit=1";
  regionData: any = [];
  dataLoaded: boolean = false;
  urlArray = [];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loadRegion();
  }
  loadRegion() {
    this.appService.getPokemon(this.regionUrl).subscribe((data) => {
      this.regionData = Object.values(data);
      if (this.urlArray.includes(this.regionUrl) === false)
        this.urlArray.push(this.regionUrl);
      this.regionUrl = this.regionData[1];
      this.regionData = this.regionData[3].map((f) => {
        return {
          ...f,
          extra: this.appService.getPokemon(f.url).pipe().toPromise(),
        };
      });
      this.dataLoaded = true;
      console.log(this.regionData);
    });
  }
  loadPrevious() {
    this.regionUrl = this.urlArray[this.urlArray.length - 2];
    this.urlArray.splice(this.urlArray.length - 1, 1);
    this.loadRegion();
  }
}
