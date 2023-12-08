import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { getUsers } from "src/app/user-state/actions/user.action";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../app.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  register: boolean = false;
  formGroup = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });
  constructor(
    private store: Store,
    private router: Router,
    private appService: AppService
  ) {}
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
  registerUser() {
    this.submitted = true;
    if (this.formGroup.valid) {
      let data = {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
      };
      this.appService.postUser(JSON.stringify(data)).subscribe((data) => {
        this.register = false;
      });
    }
  }
}
