import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentosRoutingModule } from './pagamentos-routing.module';
import { PagListaComponent } from './pag-lista/pag-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskModule } from 'ngx-mask';
import { PagFormComponent } from './pag-form/pag-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    PagListaComponent,
    PagFormComponent
  ],
  imports: [
    CommonModule,
    PagamentosRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    PagFormComponent
  ]
})
export class PagamentosModule { }
