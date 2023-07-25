import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/resources/services/alert.service';
import { ClienteService } from 'src/app/resources/services/cliente.service';
import { SolicitacaoService } from 'src/app/resources/services/solicitacao.service';
import { Cliente } from '../../cliente/Cliente';
import { Solicitacao } from '../solicitacao';

@Component({
  selector: 'app-solicitacao-lista',
  templateUrl: './solicitacao-lista.component.html',
  styleUrls: ['./solicitacao-lista.component.css']
})
export class SolicitacaoListaComponent implements OnInit {

  solicitacao: Solicitacao[] = [];
  solicitacaoSelecionada: Solicitacao = null;
  mensagemSucesso: string;
  mensagemErro: string;

  displayedColumns: string[] = [
    "descricao",
    "cliente",
    "usuario",
    "dataAbertura",
    "acoes"
  ];
  dataSource: MatTableDataSource<Solicitacao> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;

  constructor(
    private service: SolicitacaoService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.service.getsolicitacao().subscribe((response) => {
      this.solicitacao = response;
      this.dataSource = new MatTableDataSource<Solicitacao>(this.solicitacao);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });

    console.log(this.dataSource);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  novoCadastro() {
    this.router.navigate(["/solicitacao/form"]);
  }
  preparaDelecao(solicitacao: Solicitacao) {
    this.solicitacaoSelecionada = solicitacao;
  }
  deletarSolicitacao() {
    this.service.deletar(this.solicitacaoSelecionada).subscribe(
      (response) => {
        this.alertService.success(
          "Maravilha",
          "Você optou por excluir essa solicitacao"
        );
        this.ngOnInit();
      },
      (errorResponse) => {
        this.alertService.error(errorResponse.error.message);
      }
    );
  }
}
