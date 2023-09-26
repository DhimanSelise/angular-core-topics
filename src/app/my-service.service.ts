import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(
    private myHttp: HttpClient
  ) { }

  add(a: number, b: number): number{
    return a+b;
  }

  getUpcommingMovies(): Observable <any> {
    return this.myHttp.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=a54d7a09afeebfe772e8d685c01b2422');
  }

  getMoviesByPage(pageNo: number): Observable <any> {
    return this.myHttp.get<any>('https://api.themoviedb.org/3/movie/upcoming?api_key=a54d7a09afeebfe772e8d685c01b2422&page='+pageNo);
  }
}


//My API::  https://api.themoviedb.org/3/movie/upcoming?api_key=a54d7a09afeebfe772e8d685c01b2422