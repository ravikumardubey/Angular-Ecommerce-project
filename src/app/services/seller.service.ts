import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignUp } from '../data-type';
import { userLogin } from '../data-type';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SellerService {
   isSellerLogedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  userSingnUp(data: SignUp) {
    let result = this.http.post("http://localhost:3000/seller", data, { observe: 'response' })
      .subscribe((result) => {
        console.warn('result', result);
      })
  }

  userLogin(data: userLogin) {
    let result = this.http.post("http://localhost:3000/login", data);
    console.warn('result', result)
  }
}
