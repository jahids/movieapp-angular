import { Component, OnInit } from '@angular/core';
import { movieDiscover } from 'src/app/Model';
import { MovieapiService } from 'src/app/allservice/movieapi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private movieapiService : MovieapiService){}
  
  allmovieData:any
  ngOnInit() : void {
    this.movieapiService.getDiscoverMovies().subscribe({
      next : (data : any) : void =>this.allmovieData = data
    })
  }

  // image + domai name
  staticDomain = 'https://image.tmdb.org/t/p/w300/';
  getFullImage (posterpath : string) {
    return  this.staticDomain+posterpath
  }

  // ngOnInit(): any {
  //   this.movieapiService.getDiscoverMovies().subscribe(
  //     (data) => {
  //       console.log(data); // Handle the API response data here
  //     },
  //     (error) => {
  //       console.error(error); // Handle errors here
  //     }
  //   );
  // }

}
