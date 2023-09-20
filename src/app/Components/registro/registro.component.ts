import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { Registrar } from 'src/app/Model/registrar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent {
  formRegistro: FormGroup = new FormGroup({});
  ObjRegistro!: Registrar;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginServiceService
  ) {
    this.formRegistro = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      usuario: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  Registrar() {
    this.ObjRegistro = this.formRegistro.value;
    this.loginService.Registrar(this.ObjRegistro).subscribe(
        (res)=>{
          if(res){
            debugger;
            Swal.fire({
              title: "Registrado",
              text: "El usuario se registro correctamente",
              icon: 'success',
              showConfirmButton: false,
              timer: 2000
            }).then(()=>{
              this.router.navigate(["/"]);
            });
          }else{
            Swal.fire({
              title:"Error",
              text: "Se presento un error al registrar el usurio",
              icon: "error",
              showConfirmButton: false,
              timer:2000
            });
          }
        }
    );
  }

  Volver() {
    this.router.navigate(['/']);
  }
}
