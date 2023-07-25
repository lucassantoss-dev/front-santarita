import { Component, OnInit } from "@angular/core";
import { RelatoriosService } from "src/app/resources/services/relatorios.service";

@Component({
  selector: "app-mensal",
  templateUrl: "./mensal.component.html",
  styleUrls: ["./mensal.component.css"],
})
export class MensalComponent implements OnInit {
  constructor(private relatorioServico: RelatoriosService) {}

  ngOnInit(): void {}

  gerarRelatocioClientes() {
    this.relatorioServico.downloadPDF("cliente").subscribe(
      (data: Blob) => {
        var file = new Blob([data], {
          type: "application/pdf",
        });
        var fileURL = URL.createObjectURL(file);

        // if you want to open PDF in new tab
        window.open(fileURL);
        var a = document.createElement("a");
        a.href = fileURL;
        a.target = "_blank";
        a.download = "clientes.pdf";
        document.body.appendChild(a);
        a.click();
      },
      (error) => {
        console.log("getPDF error: ", error);
      }
    );
  }
  gerarRelatocioPagamentos() {
    this.relatorioServico.downloadPDF("pagamento").subscribe(
      (data: Blob) => {
        var file = new Blob([data], {
          type: "application/pdf",
        });
        var fileURL = URL.createObjectURL(file);

        // if you want to open PDF in new tab
        window.open(fileURL);
        var a = document.createElement("a");
        a.href = fileURL;
        a.target = "_blank";
        a.download = "clientes.pdf";
        document.body.appendChild(a);
        a.click();
      },
      (error) => {
        console.log("getPDF error: ", error);
      }
    );
  }
}
