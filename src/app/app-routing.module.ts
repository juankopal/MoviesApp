import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { HomeComponent } from './Components/home/home.component';
import { authGuard } from './Guards/auth.guard';
import { MoviesComponent } from './Components/movies/movies.component';
import { PopularesComponent } from './Components/populares/populares.component';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { MovieDetailsComponent } from './Components/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Registro', component: RegistroComponent },
  {
    path: 'Home',
    component: HomeComponent,
    children: [
      { path: 'Movies', component: MoviesComponent },
      { path: 'Populares', component: PopularesComponent },
      { path: 'Agregar', component: AgregarComponent },
    ],
  },
  {path:'MovieDetail/:idMovie', component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
