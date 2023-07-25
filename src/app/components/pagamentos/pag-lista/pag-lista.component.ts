import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { PagamentosService } from 'src/app/resources/services/pagamentos.service';
import { Pagamentos } from '../pagamentos';

@Component({
  selector: 'app-pag-lista',
  templateUrl: './pag-lista.component.html',
  styleUrls: ['./pag-lista.component.css']
})
export class PagListaComponent implements OnInit {

  pagamentos: Pagamentos[] = [];
  pagamentoSelecionado: Pagamentos = null;
  pagamento: Pagamentos;
  searchForm: FormGroup;

  constructor(
    private router: Router,
    private service: PagamentosService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.service
       .getPag()
       .subscribe((response) => (this.pagamentos = response));
    this.searchForm = new FormGroup({
      queryField: new FormControl(null, {
        updateOn: "change",
        validators: [Validators.required],
      }),
    });
  }

  preparaDelecao(pagamentos: Pagamentos) {
    this.pagamentoSelecionado = pagamentos;
  }
  
  onSearch() {
    // if (this.searchForm.valid) {
    //   this.service
    //     .getClienteByName(this.searchForm.value.queryField)
    //     .subscribe((response) => {
    //       this.clients = response;
    //     });
    // }
  }

  novoCadastro() {
    this.router.navigate(["/pagamentos-form"]);
  }

  deletarPagamento() {
    this.service.deletar(this.pagamentoSelecionado).subscribe(
      (response) => {
        this.alertService.success(
          "Maravilha",
          "Você optou por excluir esse pagamento!"
        );
        this.ngOnInit();
      },
      (errorResponse) => {
        this.alertService.error(errorResponse.error.message);
     }
    );
 }

}
