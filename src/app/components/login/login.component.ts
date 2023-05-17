import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getUsers } from "src/app/user-state/actions/user.action";
import { currentUserLogin } from "src/app/user-state/selector/user.selector";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  constructor(private store: Store, private router: Router) {}
  ngOnInit() {}
  login() {
    this.store.dispatch(
      getUsers({ email: this.email, password: this.password })
    );
    if (this.store.select(currentUserLogin)) this.router.navigateByUrl("/home");
  }
}
