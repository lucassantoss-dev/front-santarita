import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/resources/models/Colors';
import { AccountService } from 'src/app/resources/services/account.service';
import { AlertService } from 'src/app/resources/services/alert.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: {
    name: '',
    email: '',
    password: ''
  }
  colors = new Colors();

  constructor(
    private accountService: AccountService,
    private alertService: AlertService
    ) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);
      this.alertService.success('Maravilha', 'Usuário criado com sucesso');
    } catch (error) {
      this.alertService.error('error', 'Erro ao atualizar o cliente!');
    }
  }

  getColorButtonRegistrar() {
    return { "background-color": this.colors.cor_primaria };
  }
  getColorButtonVoltar() {
    return { "background-color": this.colors.cor_terciaria };
  }

}
 