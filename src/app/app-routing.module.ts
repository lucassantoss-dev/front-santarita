import { NgModule } from "@angular/core";
import { Routes, RouterModule, ActivatedRoute } from "@angular/router";
import { AuthComponent } from "./components/auth/auth.component";
import { ClienteFormComponent } from "./components/cliente/cliente-form/cliente-form.component";
import { CreateAccountComponent } from "./components/account/create-account/create-account.component";
import { LayoutComponent } from "./components/layout/layout/layout.component";
import { LoginComponent } from "./components/account/login/login.component";
import { AuthGuard } from "./resources/services/auth.guard";
import { ClienteListaComponent } from "./components/cliente/cliente-lista/cliente-lista.component";
import { SociosComponent } from "./components/socios/socios/socios.component";
import { SociosFormComponent } from "./components/socios/socios-form/socios-form.component";
import { PagFormComponent } from "./components/pagamentos/pag-form/pag-form.component";
import { PagListaComponent } from "./components/pagamentos/pag-lista/pag-lista.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: "login", component: LoginComponent },
      { path: "create-account", component: CreateAccountComponent },
    ],
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "cliente-lista", component: ClienteListaComponent },
      { path: "cliente-form", component: ClienteFormComponent },
      { path: "cliente-form/:id", component: ClienteFormComponent },
      { path: "socios-lista", component: SociosComponent },
      { path: "socios-form", component: SociosFormComponent },
      { path: "pagamentos-form", component: PagFormComponent },
      { path: "pagamentos-lista", component: PagListaComponent },
      { path: "pagamentos-form/:id", component: PagFormComponent },
    ],
  },
  // {
  //   path: "",
  //   component: LayoutComponent,
  //   children: [
  //   ],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
