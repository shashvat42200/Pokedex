import { NgModule, isDevMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AppService } from "./components/app.service";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { getUsersEffect } from "./user-state/effects/user.effects";
import { userReducer } from "./user-state/reducers/user.reducer";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./components/home/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UpperBarComponent } from './components/upper-bar/upper-bar.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, UpperBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      users: userReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([getUsersEffect]),
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
