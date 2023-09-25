import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movies } from 'src/app/Model/movies';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { SearchService } from 'src/app/Shared/search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  peliculas:Movies[]=[];
  page:number=1;
  searchMovie ="";
  private subscription!: Subscription;

  constructor(private loginService:LoginServiceService, private sharedService:SearchService){

  }
  ngOnInit(): void {
    this.consultarTodasPeliculas();
    this.subscription = this.sharedService.searchKeyUp$.subscribe(
      (value) => {
        this.searchMovie = value
        if(this.searchMovie == ""){
          this.consultarTodasPeliculas();
        }
        this.page=1;
        this.peliculas=this.peliculas.filter(movie1 => movie1.nombre.includes(this.searchMovie));
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  consultarTodasPeliculas(){
    this.loginService.getListMovies().subscribe({
      next:(response)=>{
        this.peliculas = response.data;
        for(let element of this.peliculas){
          element.rutaImagen=element.rutaImagen.substring(element.rutaImagen.indexOf("\\assets"))+"\\"+element.nombreImagenServidor;
        }
      }
    });
  }
}
