import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActiveItem: string = '';

  constructor(private route:Router){}

  ngOnInit(): void {
    this.setActiveItem("item1");
    this.route.navigate(["/Home/Movies"]);
  }
  setActiveItem(item: string) {
    this.isActiveItem = item;
  }

  buscar(event:any){
    console.log((event.target as HTMLInputElement).value);
  }

  Home(){
    this.route.navigate(["/Home/Movies"]);
  }
  populares(){
    this.route.navigate(["/Home/Populares"]);
  }

  Agregar(){
    this.route.navigate(["/Home/Agregar"]);
  }

}
