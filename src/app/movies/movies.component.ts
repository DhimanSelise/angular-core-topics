import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  upcomingMovies:any = '';
  constructor(
    private _movieService: MyServiceService
  ) { }

  ngOnInit(): void {
    this._movieService.getUpcommingMovies().subscribe(response=> {

      console.log('movies response',response);
      this.upcomingMovies = response;
    })
  }

  add() {
    console.log(this._movieService.add(5,6));
  }

  getImageUrl(imgUrlSuffix: string) {
    return 'https://image.tmdb.org/t/p/w342'+imgUrlSuffix;
  }
  onPageChange(event: any) {
    console.log(event);
    this._movieService.getMoviesByPage(event.pageIndex+1).subscribe(res=>{
      if(res) {
        this.upcomingMovies = res;
      }
    })
  }


}
