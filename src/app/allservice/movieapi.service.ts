import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { movieDiscover } from '../Model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  constructor(private http : HttpClient) { }
  baseurl = `http://cw-api.eu-west-3.elasticbeanstalk.com/movied`
  private allstoredata = new BehaviorSubject<any>({
    storeData : []
  });

   allstoredata$ = this.allstoredata.asObservable();

  // discover api call
  globaldata !: any;
  getDiscoverMovies():Observable<movieDiscover> {
   return this.http.get<movieDiscover>(`${this.baseurl}/discover`)
  };

  getSignleMovies(id:any):Observable<any>{
    console.log("api call", id);
  return this.http.get(`${this.baseurl}/movie/${id.id}`)
  };

  searchMovie(query:string){
    console.log("api call", query);
    console.log("api call", query);
    return this.http.get(`${this.baseurl}/search?q=${query}`).pipe(
      tap(data => {
        this.allstoredata.next({ storeData: data }); // Update globaldata with the response data
      })
    );
  }
}
