import { Component } from '@angular/core';
import { MovieapiService } from './allservice/movieapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private apiservice : MovieapiService){
  }
  search!:any;
  handledata(){
    console.log(this.search);
    this.apiservice.searchMovie(this.search).subscribe(
     (data)=>console.log(data),
     (erro)=>console.log(erro)
    )
    
  }
}
