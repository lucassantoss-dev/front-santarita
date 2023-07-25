import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";

import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";

import { ClienteRoutingModule } from './cliente-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from '@angular/common/http';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ClienteFormComponent,
    ClienteListaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ClienteRoutingModule,
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
    ClienteFormComponent
  ]
})
export class ClienteModule { }
