//must import main component
import { Component } from '@angular/core';
//declare component
//every component contains app.component.css, app.component.html, app.component.specs.ts and app.component.ts
@Component({
  selector: 'app-root', // I can call that name anywhere on my html to call this component, it is a selector name like h1, p,..
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SCA - Netsuite';
  developer ='Salah';
}
 
