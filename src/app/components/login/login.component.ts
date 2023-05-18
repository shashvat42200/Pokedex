import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getUsers } from "src/app/user-state/actions/user.action";
import {
  currentUserLogin,
  isLoggedIn,
} from "src/app/user-state/selector/user.selector";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  formGroup = new FormGroup({
    email: new FormControl("asdf@gmail.com", Validators.required),
    password: new FormControl("", Validators.required),
  });
  constructor(private store: Store, private router: Router) {}
  ngOnInit() {}
  login() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.store.dispatch(
        getUsers({
          email: this.formGroup.value.email,
          password: this.formGroup.value.password,
        })
      );
    }
  }
}
