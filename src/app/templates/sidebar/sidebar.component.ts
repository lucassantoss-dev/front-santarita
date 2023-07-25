import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colors } from 'src/app/resources/models/Colors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  colors = new Colors
  visibleProfile = false;
  visibleBenefit = false;
  visibleUser = false;
  visibleParceiro = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  getColorFooterConnected() {
    return { "background-color": this.colors.cor_secundaria }
  }

  getColorSidenav() {
    return { "background-color": this.colors.cor_primaria, "color": this.colors.cor_secundaria }
  }

  openSuporte() {
    this.visibleProfile = !this.visibleProfile;
    this.visibleBenefit = false;
    this.visibleUser = false;
    this.visibleParceiro = false;
  }


  getBackgroundColorOnVisibleProfile(){
    if(this.visibleProfile || this.visibleBenefit || this.visibleUser || this.visibleParceiro ) {
      return { "background-color": "#3a4a59" }
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/']);

  }

}
