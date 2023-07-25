import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { SociosFormComponent } from './socios-form/socios-form.component';
import { SociosComponent } from './socios/socios.component';


const routes: Routes = [
  // { path: 'socio', component: LayoutComponent, children: [
  //   { path: "form", component: SociosFormComponent },
  //   { path: "form/:id", component: SociosFormComponent },
  //   { path: "lista", component: SociosComponent }
  // ]},
  // { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SociosRoutingModule { }
