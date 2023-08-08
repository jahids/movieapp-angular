import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { MovielistComponent } from './Component/movielist/movielist.component';
import { MovielistItemComponent } from './Component/movielist-item/movielist-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleDetailsComponent } from './Component/single-details/single-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovielistComponent,
    MovielistItemComponent,
    SingleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
