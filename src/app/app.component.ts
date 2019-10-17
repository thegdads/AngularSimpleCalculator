import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  temp:string = '';

  addToTemp(val) {
    this.temp = this.temp + val;
  }
}
