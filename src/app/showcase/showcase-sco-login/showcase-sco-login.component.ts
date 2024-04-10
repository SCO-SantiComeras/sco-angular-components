import { ScoFormError } from './../../../../projects/sco-angular-components/src/services/sco-form-errors/sco-form-error.model';
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

  public formErrors: ScoFormError[];

  constructor(
    private readonly toastService: ScoToastService,
    private readonly cacheService: ScoCacheService,
  ) { 
    this.cacheService.setElement("title", "Login");
    this.formErrors = [];
  }

  cancelButton() {
    this.toastService.addSuccessMessage("Exito", "Botón cancelar presionado");
  }

  confirmButton($event: ILogin) {
    this.toastService.addSuccessMessage("Exito", "Botón confirmar presionado: " + JSON.stringify($event));
    this.validateFormValues($event);
  }

  pwdRecovery() {
    this.toastService.addSuccessMessage("Exito", "Accion recuperar contrasela seleccionada");
  }

  registerUser() {
    this.toastService.addSuccessMessage("Exito", "Accion registrar usuario seleccionada");
  }

  private validateFormValues(iLogin: ILogin): void {
    this.formErrors = [];

    if (!iLogin.name) {
      this.formErrors.push({ 
        formControlName: 'name', 
        error: 'Nombre de usuario no informado',
      });
    }

    if (!iLogin.password) {
      this.formErrors.push({ 
        formControlName: 'password', 
        error: 'Contraseña de usuario no informado',
      });
    }
  }
}