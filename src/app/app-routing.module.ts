import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { AuthLoginComponent } from './auth-login/auth-login.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home',
  },
  {
    component:SellerAuthComponent,
    path:'seller-outh',
  },
  {
    component:SellerHomeComponent,
    path:'seller-home',
    canActivate:[authGuard]
  },
  {
    component:AuthLoginComponent,
    path:'outh-login',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
