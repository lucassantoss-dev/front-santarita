import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout/layout.component';
import { PagFormComponent } from './pag-form/pag-form.component';
import { PagListaComponent } from './pag-lista/pag-lista.component';


const routes: Routes = [
  // {path: 'pagamentos', component: LayoutComponent, children: [
  //   {path: 'lista', component: PagListaComponent},
  //   {path: 'form', component: PagFormComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentosRoutingModule { }
