import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AppService {
  allUrl = "https://pokedex-app-c8934-default-rtdb.firebaseio.com/.json";
  userUrl = "https://pokedex-app-c8934-default-rtdb.firebaseio.com/users.json";
  teamsUrl = "https://pokedex-app-c8934-default-rtdb.firebaseio.com/teams/";
  allUserData = [];
  activeHomePage = "pokemon";
  isLoggedin = false;
  addingPokemon: boolean = false;
  addingPokemonData: any = [];
  constructor(private http: HttpClient, private router: Router) {}

  getUserInfo(email: string, password: string): Observable<any> {
    return this.http.get<any>(this.userUrl).pipe(
      map((res) => {
        let found = {};
        res = Object.values(res);
        res.forEach((element) => {
          if (element.email === email && element.password === password) {
            this.isLoggedin = true;
            this.router.navigate(["/home/pokemon"]);
            found = element;
          }
        });
        return found;
      })
    );
  }

  getPokemon(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  postPokemon(uid, data): Observable<any> {
    return this.http.post(this.teamsUrl + uid + ".json", data);
  }
  deletePokemon(uid, id): Observable<any> {
    return this.http.delete(this.teamsUrl + uid + "/" + id + ".json");
  }
}
