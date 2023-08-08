import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { movieDiscover } from '../Model';


@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  constructor(private http : HttpClient) { }
  baseurl = `http://cw-api.eu-west-3.elasticbeanstalk.com/movied`
  // discover api call
  getDiscoverMovies():Observable<any> {
   return this.http.get(`${this.baseurl}/discover`)
  }
}
