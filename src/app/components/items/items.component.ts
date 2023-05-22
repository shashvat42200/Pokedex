import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"],
})
export class ItemsComponent implements OnInit {
  itemsUrl = "https://pokeapi.co/api/v2/item-category?limit=5";
  urlArray = [];
  itemsData = [];
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loadItems();
  }
  loadItems() {
    this.appService.getPokemon(this.itemsUrl).subscribe((data) => {
      this.itemsData = Object.values(data);
      if (this.urlArray.includes(this.itemsUrl) === false)
        this.urlArray.push(this.itemsUrl);
      this.itemsUrl = this.itemsData[1];
      this.itemsData = this.itemsData[3].map((f) => {
        return {
          ...f,
          extra: this.appService.getPokemon(f.url).pipe().toPromise(),
        };
      });
    });
  }
  loadPrevious() {
    this.itemsUrl = this.urlArray[this.urlArray.length - 2];
    this.urlArray.splice(this.urlArray.length - 1, 1);
    this.loadItems();
  }
}
