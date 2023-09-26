import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies } from 'src/app/Model/movies';
import { LoginServiceService } from 'src/app/Services/login-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movies = {
    autor:"",
    nombre:"",
    descripccion:"",
    fechaLanzamiento:"",
    idMovie:0,
    nombreImagenOriginal:"",
    nombreImagenServidor:"",
    rutaImagen:""
  }
  id!: number;
  constructor(private route: ActivatedRoute, private loginService:LoginServiceService, private router:Router){

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
          this.movie.rutaImagen=this.movie.rutaImagen.substring(this.movie.rutaImagen.indexOf("\\assets"))+"\\"+this.movie.nombreImagenServidor;
        }
      }
    );
  }

  Volver(){
    this.router.navigate(["Home"]);
  }

}
