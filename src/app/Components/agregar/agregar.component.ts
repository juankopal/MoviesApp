import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {
  formMovie: FormGroup = new FormGroup({});
  formdata:FormData = new FormData();

  constructor(private fb: FormBuilder,private loginService:LoginServiceService, private router:Router){
    this.formMovie = this.fb.group({
      nombre :["",Validators.required],
      autor :["",Validators.required],
      descripccion :["",Validators.required],
      fechaLanzamiento :["",Validators.required]
    })
  }

  captirarImagen(event:any){
    const archivo = event.target.files[0];
    this.formdata.append('imagen',archivo);
  }

  agregar(){
    this.formdata.append('nombre',this.formMovie.get('nombre')?.value);
    this.formdata.append('autor',this.formMovie.get('autor')?.value);
    this.formdata.append('descripccion',this.formMovie.get('descripccion')?.value);
    this.formdata.append('fechaLanzamiento',this.formMovie.get('fechaLanzamiento')?.value);

    this.loginService.addMovie(this.formdata).subscribe(
      {
        next:(data)=>{
          debugger;
          if(data.status==="ok"){
            Swal.fire({
              title:"Se agrego la pelicula",
              text:"la pelicula fue agregada de forma exitosa",
              icon:"success",
              confirmButtonText:"Aceptar",
              showCancelButton:false
            }).then(
              (result) =>{
                this.router.navigate(["Home/Movies"]);
              }
            )
          }
        }
      }
    )
  }

}
