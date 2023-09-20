import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  url!:string
  headers1 = new HttpHeaders({
    'Content-Type': 'application/json' // o 'application/json' si es necesario
  });
  constructor(private _http:HttpClient ) {
   }

  Registrar(obj:any):Observable<boolean>{
    return this._http.post<any>('http://localhost:5198/api/Usuario/Registrar',obj);
  }

  iniciarSesion(User:string, Pass:string):Observable<any>{
    return this._http.get('http://localhost:5198/api/Usuario/IniciarSesion/'+User+"/"+Pass);
  }

  addMovie(objMovie:FormData):Observable<any>{
    return this._http.post('http://localhost:5198/api/Usuario/AddMovie',objMovie);
  }
}
