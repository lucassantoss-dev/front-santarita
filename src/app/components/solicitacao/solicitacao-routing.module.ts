import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { SolicitacaoFormComponent } from './solicitacao-form/solicitacao-form.component';
import { SolicitacaoListaComponent } from './solicitacao-lista/solicitacao-lista.component';


const routes: Routes = [
  {path: "solicitacao", component: LayoutComponent, children: [
    {path: "form", component: SolicitacaoFormComponent},
    {path: "lista", component: SolicitacaoListaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitacaoRoutingModule { }
