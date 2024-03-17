import { ScoCacheService } from '../../../../projects/sco-angular-components/src/services/sco-cache.service';
import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ILogin } from './../../../../projects/sco-angular-components/src/components/sco-login/model/sco-login.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-sco-login',
  templateUrl: './showcase-sco-login.component.html',
  styleUrls: ['./showcase-sco-login.component.scss']
})

export class ShowcaseScoLoginComponent {

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

  cancelButton() {
    this.toastService.addSuccessMessage("Exito", "Botón cancelar presionado");
  }

  confirmButton($event: ILogin) {
    this.toastService.addSuccessMessage("Exito", "Botón confirmar presionado: " + JSON.stringify($event));
  }

  pwdRecovery() {
    this.toastService.addSuccessMessage("Exito", "Accion recuperar contrasela seleccionada");
  }

  registerUser() {
    this.toastService.addSuccessMessage("Exito", "Accion registrar usuario seleccionada");
  }
}
