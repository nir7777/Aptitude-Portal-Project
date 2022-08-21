import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

//   {
//   path:'',
//   component:NavbarComponent,
//   pathMatch:'full'
//   },

 {
  path:'',
  component: HomeComponent,
  pathMatch:'full',
 },

 {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full',
 }, 
 {
  path:'login',
  component:LoginComponent,
  pathMatch:'full',
 },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
