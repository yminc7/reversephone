import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReversePhoneService {

  constructor(private http: HttpClient) { }
  
  
  getPhone(phone){
    return this.http.get('https://proapi.whitepages.com/3.0/phone?phone=' + phone + '&api_key=caa86fd5df66436aa4f37b054aa71a1a')
  }
}
