import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Colors } from "src/app/resources/models/Colors";
import { RequestLogin } from "src/app/resources/models/RequestLogin";
import { AccountService } from "src/app/resources/services/account.service";
import { AlertService } from "src/app/resources/services/alert.service";
import { LoginService } from "src/app/resources/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  requestLogin: RequestLogin;
  formLogin: FormGroup;
  name = '';
 
  constructor(
    private router: Router,
    private alertService: AlertService,
    private loginService: LoginService,
    private accountService: AccountService
  ) {
    this.requestLogin = new RequestLogin();
    this.initForm();
  }

  ngOnInit() {}

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.requestLogin);
      console.log(`Login Efetuado: ${result}`);
      if(result) {
        this.router.navigate(['/cliente-lista']);
      }
    } catch (error) {
      this.alertService.info("Você não tem permissão para acessar esse site", "Não autorizado")
      // console.error(error);
    }
    // this.router.navigate(['/layout']);
  }

  // loginProcess() {
  //   // console.log(this.formLogin);
  //   if (this.formLogin.valid) {
  //     this.loginService.login(this.formLogin.value).subscribe(
  //       (result: any) => {
  //         this.alertService.success("success", "Login efetuado com sucesso!");
  //         //this.alertService.info('Login efetuado com sucesso');
  //         localStorage.setItem("token", result.token);
  //         // sessionStorage.setItem("token", result.token);
  //         this.router.navigate(["layout"]);
  //         // console.log(resut);
  //         //this.mensagemSucesso = "login teste";
  //       },
  //       (httpError) => {
  //         this.alertService.error(httpError.error.message);
  //       }
  //     );
  //   } else {
  //     this.alertService.error("Por favor, preencha todos os campos.");
  //   }
  //   //this.router.navigate(['/home']);
  // }
  // preparaCadastrar(event) {
  //   event.preventDefault();
  //   this.cadastrando = true;
  // }
  // cancelaCadastro() {
  //   this.cadastrando = false;
  // }
  // emailCadastro() {
  //   this.cadastrando = true;
  // }
  // confirmPassword() {
  //   this.cadastrando = true;
  // }
  // cadastrar() {
  //   const user: User = new User();
  //   user.username = this.username;
  //   user.email = this.email;
  //   user.password = this.password;
  //   user.password_confirmation = this.password_confirmation;
  //   this.loginService.salvar(user).subscribe(
  //     (response) => {
  //       this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login";
  //       this.cadastrando = false;
  //       this.username = "";
  //       this.email = "";
  //       this.password = "";
  //       this.password_confirmation = "";
  //     },
  //     (errorResponse) => {
  //       this.mensagemSucesso = null;
  //       this.errors = errorResponse.error.errors;
  //     }
  //   );
  // }
  initForm() {
    this.formLogin = new FormGroup({
      name: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    });
  }
}
