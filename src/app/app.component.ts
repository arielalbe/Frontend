import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio de Ariel Alberino';


constructor(){
  localStorage.setItem("login", "NoLogged");
}



}