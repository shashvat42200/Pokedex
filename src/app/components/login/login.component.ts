import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getUsers } from "src/app/user-state/actions/user.action";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  email: string = "asdf@gmail.com";
  password: string = "12345";
  constructor(private store: Store) {}
  ngOnInit() {}
  login() {
    this.store.dispatch(
      getUsers({ email: this.email, password: this.password })
    );
  }
}
