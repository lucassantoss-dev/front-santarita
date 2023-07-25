import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/resources/models/Colors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  colors = new Colors
  constructor() { }

  ngOnInit(): void {
  }

  getColorNav() {
    return { "background-color": this.colors.cor_secundaria }
  }

  getColorText() {
    return { "color": "#FFF" }
  }

}
