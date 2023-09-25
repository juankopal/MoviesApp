import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/Shared/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActiveItem: string = '';

  constructor(private route:Router, private sharedService:SearchService){}

  ngOnInit(): void {
    this.setActiveItem("item1");
    this.route.navigate(["/Home/Movies"]);
  }
  setActiveItem(item: string) {
    this.isActiveItem = item;
  }

  buscar(event:any){
    this.sharedService.sendSearchKeyUpEvent((event.target as HTMLInputElement).value);
    //console.log((event.target as HTMLInputElement).value);
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
