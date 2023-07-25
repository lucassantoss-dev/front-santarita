import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { PagamentosService } from 'src/app/resources/services/pagamentos.service';
import { SociosService } from 'src/app/resources/services/socios.service';
import { Socio } from '../../socios/Socio';
import { Pagamentos } from '../pagamentos';

@Component({
  selector: 'app-pag-form',
  templateUrl: './pag-form.component.html',
  styleUrls: ['./pag-form.component.css']
})
export class PagFormComponent implements OnInit {

  pagForm: FormGroup;
  pagamentos: Pagamentos;
  colorSituacao: string;
  Validators: any;
  id: number = 0;
  socios: Socio[] = [];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private pagService: PagamentosService,
    private alertService: AlertService,
  ) { 
    this.pagamentos = new Pagamentos();
  }
  
  ngOnInit(): void {
    this.configurarFormulario();
  }
  configurarFormulario() {
    this.pagForm = this.formBuilder.group({
      nome: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
      data: [
        null,
        [Validators.required],
      ],
    })
  }    

  salvar() {
    this.configurarFormulario();
    if(this.id){
      this.pagService
      .atualizar(this.pagamentos)
      .subscribe(response => {
        this.alertService.success('Maravilha', 'Pagamento atualizado com sucesso');
      }, errorResponse => {
        this.alertService.info('error', 'Erro ao atualizar o pagamento!');
      })

    }else {
    this.pagService
      .salvar(this.pagamentos)
      .subscribe( (data) => {
        this.alertService.success('Ótimo', 'Pagamento criado com sucesso!');
      }, (errorResponse) => {
        this.alertService.error(errorResponse.error.message);
        })
    }
  }

}
