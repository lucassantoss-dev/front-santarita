import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/components/layout/layout/layout.component';
import { ControlPagSocioComponent } from './control-pag-socio/control-pag-socio.component';
import { MensalComponent } from './mensal/mensal.component';


const routes: Routes = [
  {
    path: "rel",
    component: LayoutComponent,
    children: [
      {
        path: "mensal",
        component: MensalComponent
      },
      {
        path: "controle-pagamento-socio",
        component: ControlPagSocioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelRoutingModule { }
