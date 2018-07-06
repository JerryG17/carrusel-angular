import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  images: Array<string> = [
    "assets/img/wp1.jpg",
    "assets/img/wp7.png",
    "assets/img/wp8.jpg",
    "assets/img/wp9.jpg"
  ]

  constructor() { }

  ngOnInit() {
  }

}
