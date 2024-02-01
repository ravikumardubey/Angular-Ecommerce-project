import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignUp } from '../data-type';
import { userLogin } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  userSingnUp(data:SignUp){
     return this.http.post("http://localhost:3000/seller",data)
  }

  userLogin(data:userLogin){
    return this.http.post("http://localhost:3000/login",data)
  }
}
