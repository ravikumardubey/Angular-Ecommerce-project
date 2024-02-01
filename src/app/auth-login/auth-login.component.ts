import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { userLogin } from '../data-type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  constructor(private seller:SellerService ,private router:Router){}
  ngOnInit(): void {}
  userLogin(data:userLogin):void{
    this.seller.userLogin(data).subscribe((result)=>{
     console.log(result);
       if(result){
         this.router.navigate(['seller-home'])
       }
    });
 }
}
