import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/resources/services/alert.service';
import { SociosService } from 'src/app/resources/services/socios.service';
import { Socio } from '../Socio';

@Component({
  selector: 'app-socios-form',
  templateUrl: './socios-form.component.html',
  styleUrls: ['./socios-form.component.css']
})
export class SociosFormComponent implements OnInit {

  socioForm: FormGroup;
  socio: Socio;
  colorSituacao: string;
  Validators: any;
  id: number;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private sociosService: SociosService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
  ) { 
    this.socio = new Socio();
  }

  ngOnInit(): void {
    this.configurarFormulario();
  }


  configurarFormulario() {
    this.socioForm = this.formBuilder.group({
      nome: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    })
  }    
  salvar() {
    this.configurarFormulario();
    if(this.id){
      this.sociosService
      .atualizar(this.socio)
      .subscribe(response => {
        this.alertService.success('Maravilha', 'Cliente atualizado com sucesso');
      }, errorResponse => {
        this.alertService.info('error', 'Erro ao atualizar o cliente!');
      })

    }else {
    this.sociosService
      .salvar(this.socio)
      .subscribe( (data) => {
        this.alertService.success('Ótimo', 'Socio criado com sucesso!');
      }, (errorResponse) => {
        this.alertService.error(errorResponse.error.message);
        })
    }
  }

  voltarParaListagem() {
    this.router.navigate(["/socio/lista"]);
  }

}
