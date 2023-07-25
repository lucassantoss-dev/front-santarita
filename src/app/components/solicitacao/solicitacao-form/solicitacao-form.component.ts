import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { ClienteService } from 'src/app/resources/services/cliente.service';
import { SolicitacaoService } from 'src/app/resources/services/solicitacao.service';
import { Cliente } from '../../cliente/Cliente';
import { Solicitacao } from '../solicitacao';

@Component({
  selector: 'app-solicitacao-form',
  templateUrl: './solicitacao-form.component.html',
  styleUrls: ['./solicitacao-form.component.css']
})
export class SolicitacaoFormComponent implements OnInit {

  clienteForm: FormGroup;
  cliente: Cliente;
  colorSituacao: string;
  Validators: any;
  id: number;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private alertService: AlertService
  ) { 
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.configurarFormulario();
  }
  configurarFormulario() {
    this.clienteForm = this.formBuilder.group({
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
      this.clienteService
      .atualizar(this.cliente)
      .subscribe(response => {
        this.alertService.success('Maravilha', 'Cliente atualizado com sucesso');
      }, errorResponse => {
        this.alertService.info('error', 'Erro ao atualizar o cliente!');
      })

    }else {
    this.clienteService
      .salvar(this.cliente)
      .subscribe( (data) => {
        this.alertService.success('Ótimo', 'Cliente criado com sucesso!');
      }, (errorResponse) => {
        this.alertService.error(errorResponse.error.message);
        })
    }
  }

  voltarParaListagem() {
    this.router.navigate(["layout"]);
  }

}
