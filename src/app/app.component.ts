import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  temp:string = '';

  ngOnInit() {
    fromEvent(document, 'keypress').subscribe(event => {
      if('1234567890+-/*'.indexOf(event.key)>-1) {
        this.addToTemp(event.key);
      }
    });
  }

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
