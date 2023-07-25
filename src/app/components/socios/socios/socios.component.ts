import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { SociosService } from 'src/app/resources/services/socios.service';
import { Socio } from '../Socio';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  socio: Socio[] = [];
  socioSelecionado: Socio = null;
  mensagemSucesso: string;
  mensagemErro: string;
  //cliente$: Observable<any>;
  // total: number;
  socios: Socio;
  searchForm: FormGroup;

  constructor(
    private service: SociosService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
     this.service
       .getSocio()
       .subscribe((response) => (this.socio = response));
    this.searchForm = new FormGroup({
      queryField: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required],
      }),
    });
  }

  novoCadastro() {
    this.router.navigate(["/socios-form"]);
  }
  preparaDelecao(socio: Socio) {
    this.socioSelecionado = socio;
  }
  onSearch() {
     if (this.searchForm.valid) {
       this.service
         .getSocioByName(this.searchForm.value.queryField)
         .subscribe((response) => {
           this.socio = response;
         });
     }
  }
  deletarSocio() {
     this.service.deletar(this.socioSelecionado).subscribe(
       (response) => {
         this.alertService.success(
           "Maravilha",
           "Você optou por excluir esse socio!"
         );
         this.ngOnInit();
       },
       (errorResponse) => {
         this.alertService.error(errorResponse.error.message);
       }
     );
  }
}
