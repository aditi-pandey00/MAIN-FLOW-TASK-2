import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { AuthguardGuard } from './guard/auth.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    redirectTo:"header", pathMatch:"full"
  },
  {
    path:"header",
    component:LoginComponent
  },
  {
    path:"update",
    component:UpdateComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"home",
    component:DashboardComponent,
  
  },
  {
    path:"login",
    component:LoginComponent,
 
  },
  {
    path:"create",
    component:CreateComponent
   
 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
