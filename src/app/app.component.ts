import { Component } from '@angular/core';
import { ReversePhoneService } from './reverse-phone.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'whitepage';
  result;
  phoneNumber;
  
  
  constructor(private _reverse: ReversePhoneService) {}
  
  
  getReverse(){
    this._reverse.getPhone(this.phoneNumber)
    .subscribe( 
      (data) => {
        console.log(data)
        this.result = data;
      }
        )
        
  }
}


