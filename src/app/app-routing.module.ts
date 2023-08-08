import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { SingleDetailsComponent } from './Component/single-details/single-details.component';

const routes: Routes = [
{
  path : "",
  redirectTo : "/dashbord",
  pathMatch : "full"
},

{ 
   path : "dashbord",
  component : DashboardComponent
 },

 {
  path : 'detail/:id',
  component : SingleDetailsComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
