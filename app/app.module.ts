import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFooterComponent } from './component-modules/my-footer/my-footer.component';
import { NavBarrComponent } from './component-modules/nav-barr/nav-barr.component';
import { MySideBarComponent } from './component-modules/my-side-bar/my-side-bar.component';
import { MainLoginComponent } from './component-modules/main-login/main-login.component';
import { LogOutComponent } from './component-modules/log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFooterComponent,
    NavBarrComponent,
    MySideBarComponent,
    MainLoginComponent,
    LogOutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
