import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SociosRoutingModule } from "./socios-routing.module";
import { SociosComponent } from "./socios/socios.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SociosService } from "src/app/resources/services/socios.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SociosFormComponent } from "./socios-form/socios-form.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgxMaskModule } from "ngx-mask";

@NgModule({
  declarations: [SociosComponent, SociosFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SociosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forChild(),
  ],
  exports: [SociosFormComponent],
})
export class SociosModule {}
