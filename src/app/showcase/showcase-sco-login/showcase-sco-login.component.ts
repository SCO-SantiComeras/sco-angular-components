import { ScoCacheService } from '../../../../projects/sco-components-lib/src/services/sco-cache.service';
import { ScoToastService } from './../../../../projects/sco-components-lib/src/components/sco-toast/sco-toast.service';
import { ILogin } from './../../../../projects/sco-components-lib/src/components/sco-login/model/sco-login.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-login',
  templateUrl: './showcase-sco-login.component.html',
  styleUrls: ['./showcase-sco-login.component.scss']
})

export class ShowcaseScoLoginComponent implements OnInit {

  public inputUser: string;
  public inputPwd: string;

  constructor(
    private readonly toastService: ScoToastService,
    private readonly cacheService: ScoCacheService,
  ) { 
    this.cacheService.setElement("title", "Login")
    this.inputUser = '';
    this.inputPwd = '';
  }

  ngOnInit() {
  }

  cancelButton() {
    console.log("cancelButton");
    this.toastService.addSuccessMessage("Exito", "Botón cancelar presionado");
  }

  confirmButton($event: ILogin) {
    console.log("confirmButton: " + JSON.stringify($event));
    this.toastService.addSuccessMessage("Exito", "Botón confirmar presionado: " + JSON.stringify($event));
  }

  pwdRecovery() {
    console.log("pwdRecovery");
    this.toastService.addSuccessMessage("Exito", "Accion recuperar contrasela seleccionada");
  }

  registerUser() {
    console.log("registerUser");
    this.toastService.addSuccessMessage("Exito", "Accion registrar usuario seleccionada");
  }
}
