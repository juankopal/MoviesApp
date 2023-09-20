import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies:any=[];
  constructor(private loginService:LoginServiceService){

  }
  ngOnInit(): void {
    this.loginService.getListMovies().subscribe({
      next:(response)=>{
        this.movies = response.data;
        for(let element of this.movies){
          element.rutaImagen=element.rutaImagen.substring(element.rutaImagen.indexOf("\\assets"))+"\\"+element.nombreImagenServidor;
        }
        console.log(this.movies);
      }
    })
  }
}
