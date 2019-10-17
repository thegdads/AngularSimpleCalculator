import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  temp:string = '';

  addToTemp(val) {
   if (this.temp.substring(0,1)=='0'){
    this.temp = ''
   }
    this.temp = this.temp + val;
  }

  onclear(){
    this.temp = '0';
  }
}
