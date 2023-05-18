import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../classes/user";
import { catchError, filter, map } from "rxjs/operators";
import { error } from "console";
@Injectable({
  providedIn: "root",
})
export class AppService {
  allUrl = "https://pokedex-app-c8934-default-rtdb.firebaseio.com/.json";
  userUrl = "https://pokedex-app-c8934-default-rtdb.firebaseio.com/users.json";
  teamsUrl = "https://pokedex-app-c8934-default-rtdb.firebaseio.com/teams.json";
  allUserData = [];
  isLoggedin = false;
  constructor(private http: HttpClient) {}

  getUserInfo(email: string, password: string): Observable<any> {
    return this.http.get<any>(this.userUrl).pipe(
      map((res) => {
        let found = {};
        res = Object.values(res);
        res.forEach((element) => {
          if (element.email === email && element.password === password) {
            this.isLoggedin = true;
            found = element;
          }
        });
        return found;
      })
    );
  }
}
