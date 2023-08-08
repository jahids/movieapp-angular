import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';

const routes: Routes = [
{
  path : "",
  redirectTo : "/dashbord",
  pathMatch : "full"
},

{ 
   path : "dashbord",
  component : DashboardComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
