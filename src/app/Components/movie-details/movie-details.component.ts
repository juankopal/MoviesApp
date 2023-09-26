import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/Model/movies';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie!:Movies
  id!: number;
  constructor(private route: ActivatedRoute, private loginService:LoginServiceService){

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>{
        this.id = params['idMovie'];
      }
    );
    this.consultarMovie(this.id);
  }

  consultarMovie(id:number){
    this.loginService.getMovie(id).subscribe(
      {
        next:(response)=>{
          this.movie = response.data;
          console.log(this.movie);
        }
      }
    );
  }

}
