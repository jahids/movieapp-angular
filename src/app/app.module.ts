import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { MovielistComponent } from './Component/movielist/movielist.component';
import { MovielistItemComponent } from './Component/movielist-item/movielist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovielistComponent,
    MovielistItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
