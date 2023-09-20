import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  User!:string;
  Pass!:string;
  constructor(private router:Router, private loginService:LoginServiceService){}

  Registrar(){
    this.router.navigate(["Registro"]);
  }

  login(){
    this.loginService.iniciarSesion(this.User,this.Pass).subscribe(
      {
        next: (data:any)=>{
          if(data){
            //localStorage.setItem('sesion',"true");
            this.router.navigate(['Home']);
          }else{
            this.User="";
            this.Pass="";
            Swal.fire(
              {
                title:"Error",
                text:"Usuario o contraseña incorrectos",
                showConfirmButton:false,
                timer:2000,
                icon:"error"
              }
            )
          }
        }
      }
    )
  }

}
