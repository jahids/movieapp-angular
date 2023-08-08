import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieapiService } from 'src/app/allservice/movieapi.service';

@Component({
  selector: 'app-single-details',
  templateUrl: './single-details.component.html',
  styleUrls: ['./single-details.component.css']
})
export class SingleDetailsComponent implements OnInit {
 constructor(private route : ActivatedRoute, private movieService : MovieapiService){
 
 }
 movieId = this.route.snapshot.params
 singleMoviedata : any
 isLoading = true;
ngOnInit(): void {
  this.movieService.getSignleMovies(this.movieId).subscribe(
    (data)=>{
      this.singleMoviedata = data,
      this.isLoading = false
    },
    (error)=>{
      console.log(error);
      this.isLoading = false
      
    }
  )
}

  // image + domai name
  staticDomain = 'https://image.tmdb.org/t/p/w300/';
  getFullImage(posterpath: string) {
    return this.staticDomain + posterpath;
  }

}
