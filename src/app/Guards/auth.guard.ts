import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  var rutas! :Router
  if(Boolean(localStorage.getItem("sesion"))){
    return true;
  }else{
    rutas.navigate(['Registro']);
    return false;
  }
};
