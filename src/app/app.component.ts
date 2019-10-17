import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  temp:string = '';
  temp2:string = '';
  nil1:number;
  nil2:number;
  opr:string;
  hasil:number ;
  cek:boolean;

  ngOnInit() {
    fromEvent(document, 'keypress').subscribe((event:any) => {
      if('1234567890+-/*'.indexOf(event.key)>-1) {
        this.addToTemp(event.key);
      }else if(event.key==='Enter') {
        this.onresult();
      }else if(event.key==='Delete') {
        this.onclear();
      }
    });
  }

  addToTemp(val) {
   if (this.temp.substring(0,1)=='0'){
    this.temp = ''
   }
    this.temp = this.temp + val;
    const copr = ['+','-','/','*'];
    if (copr.indexOf(val) > -1){
      this.nil1 = parseInt(this.temp);
      this.opr = val;
      this.cek = true;
    }
    if (this.cek == true){
      if (copr.indexOf(val) > -1){
        val='';
        this.temp2 ='';
      }
      this.temp2 = this.temp2 + val;
      this.nil2 = parseInt(this.temp2);
    }
  }

  onclear(){
    this.temp = '0';
    this.temp2 = '';
    this.nil1 = 0 ;
    this.nil2 = 0 ;
    this.hasil = 0;
  }

  onresult(){
    switch (this.opr) {
      case '+':
        this.hasil = this.nil1 + this.nil2;
        break;
      case '-':
        this.hasil = this.nil1 - this.nil2;
        break;
      case '*':
        this.hasil = this.nil1 * this.nil2;
        break;
      case '/':
        this.hasil = this.nil1 / this.nil2 ;
        break;
    }
  }
}
