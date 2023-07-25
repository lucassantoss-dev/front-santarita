import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AuthGuard } from 'src/app/resources/services/auth.guard';
import { LayoutComponent } from '../layout/layout/layout.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';


const routes: Routes = [
  // {
  //   path: "cliente", component: LayoutComponent, children: [
  //     { path: "lista", component: ClienteListaComponent },
  //     { path: "form", component: ClienteFormComponent },
  //   ],
  //   canActivate: [AuthGuard]
  // },
  // { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
