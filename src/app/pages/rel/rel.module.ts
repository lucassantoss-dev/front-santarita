import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule, registerLocaleData } from "@angular/common";

import { RelRoutingModule } from "./rel-routing.module";
import { MensalComponent } from "./mensal/mensal.component";
import { ControlPagSocioComponent } from "./control-pag-socio/control-pag-socio.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";

import localePt from '@angular/common/locales/pt';
import { MatNativeDateModule } from "@angular/material/core";

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [MensalComponent, ControlPagSocioComponent],
  imports: [
    CommonModule,
    RelRoutingModule,
    MatDatepickerModule,
    MatInputModule,    
    MatNativeDateModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-BR' } ],
})
export class RelModule {}
