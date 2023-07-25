import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitacaoRoutingModule } from './solicitacao-routing.module';
import { SolicitacaoListaComponent } from './solicitacao-lista/solicitacao-lista.component';
import { SolicitacaoFormComponent } from './solicitacao-form/solicitacao-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    SolicitacaoListaComponent,
    SolicitacaoFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SolicitacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [
    SolicitacaoFormComponent,
    SolicitacaoListaComponent
  ]
})
export class SolicitacaoModule { }
