import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./user-state/guard/auth.guard";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { TeamsComponent } from "./components/teams/teams.component";
import { ItemsComponent } from "./components/items/items.component";
import { RegionsComponent } from "./components/regions/regions.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "pokemon", component: PokemonComponent },
      { path: "teams", component: TeamsComponent },
      { path: "items", component: ItemsComponent },
      { path: "regions", component: RegionsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
