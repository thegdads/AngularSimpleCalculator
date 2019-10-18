import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  temp:string = '';
  temp2:string = '';
  nil1:number;
  nil2:number;
  opr:string;
  hasil:number ;
  cek:boolean;

  // this.cek = false; 

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
    console.log(this.opr);
    console.log(this.nil1);
    console.log(this.nil2);
    
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
    this.temp = this.hasil.toString();

  }
}
