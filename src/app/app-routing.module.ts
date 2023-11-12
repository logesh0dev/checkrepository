import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"resume",component:ResumeComponent},

  {path:"check",loadChildren: ()=> import('./check/check.module').then(m => m.CheckModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
