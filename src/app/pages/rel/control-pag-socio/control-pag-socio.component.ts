import { Component, OnInit } from "@angular/core";
import { RelatoriosService } from "src/app/resources/services/relatorios.service";

@Component({
  selector: "app-control-pag-socio",
  templateUrl: "./control-pag-socio.component.html",
  styleUrls: ["./control-pag-socio.component.css"],
})
export class ControlPagSocioComponent implements OnInit {
  constructor(private relatorioServico: RelatoriosService) {}

  ngOnInit(): void {}

  gerarRelatocioSocios() {
    this.relatorioServico.downloadPDF('socio').subscribe(
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
        a.download = "socios.pdf";
        document.body.appendChild(a);
        a.click();
      },
      (error) => {
        console.log("getPDF error: ", error);
      }
    );
  }
}
