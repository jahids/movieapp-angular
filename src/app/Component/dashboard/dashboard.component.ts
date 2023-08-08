import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy   } from '@angular/core';
import { movieDiscover } from 'src/app/Model';
import { MovieapiService } from 'src/app/allservice/movieapi.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent  {
  constructor(private movieapiService: MovieapiService) {}

  allmovieData: any;
   subscription!: Subscription;
   mainmoviedata !: any

  ngOnInit(): void {
    this.movieapiService.getDiscoverMovies().subscribe({
      next: (data: any) => {
        this.mainmoviedata = data
        console.log("maindata", data);
        this.allmovieData = data;
      }
    });

    this.subscription = this.movieapiService.allstoredata$.subscribe({
      next: (data) => {
        console.log("--data",data)
        if(data.storeData.length === 0 ){
          this.movieapiService.getDiscoverMovies().subscribe({
            next: (data: any) => {
              this.allmovieData = data;
            }
          });
        }else{
          this.allmovieData = data.storeData; 
        }
       // Update your component's data
        // You might need to extract the cartTotal and favouriteTotal from storeData
        // this.cartTotal = ...
        // this.favouriteTotal = ...
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

 


  // ngDoCheck(): void {
  //   if (this.movieapiService.globaldata) {
  //     console.log("check data", this.movieapiService.globaldata);
  //     let ss  = this.movieapiService.globaldata ;
  //     this.allmovieData.push(ss)
  //   }
  // }


  // image + domai name
  staticDomain = 'https://image.tmdb.org/t/p/w300/';
  getFullImage(posterpath: string) {
    return this.staticDomain + posterpath;
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
