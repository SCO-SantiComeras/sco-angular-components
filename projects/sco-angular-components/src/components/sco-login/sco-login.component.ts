import { ILogin } from './model/sco-login.model';
import { ScoConstantsService } from '../../services/sco-constants.service';
import { Component, Input, OnInit, Output, ViewEncapsulation, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'sco-login',
  templateUrl: './sco-login.component.html',
  styleUrls: ['./sco-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoLoginComponent implements OnInit {

  @Input() labelUser: string = 'Usuario';
  @Input() labelPassword: string = 'Contraseña';
  @Input() labelCancel: string = 'Cancelar';
  @Input() labelConfirm: string = 'Acceder';
  @Input() labelPwdRecovery: string = 'Recuperar contraseña';
  @Input() showLabelPwdRecovery: boolean = true;
  @Input() labelUserRegister: string = 'Registrar usuario';
  @Input() showLabelUserRegister: boolean = true;

  @Output() cancel: EventEmitter<boolean>;
  @Output() confirm: EventEmitter<ILogin>;
  @Output() pwdRecovery: EventEmitter<boolean>;
  @Output() registerUser: EventEmitter<boolean>;

  public showPassword: boolean;
  public inputUser: string;
  public inputPwd: string;

  constructor(
    public readonly constantsService: ScoConstantsService
  ) { 
    this.cancel = new EventEmitter<boolean>();
    this.confirm = new EventEmitter<ILogin>();
    this.pwdRecovery = new EventEmitter<boolean>();
    this.registerUser = new EventEmitter<boolean>();
    this.showPassword = false;
    this.inputUser = '';
    this.inputPwd = '';
  }

  ngOnInit() {
    this.showPassword = false;
  }

  showHidePassowrd() {
    this.showPassword = !this.showPassword;
  }

  cancelButton() {
    this.inputPwd = '';
    this.inputUser = '';
    this.cancel.emit(true);
  }

  confirmButton() {
    let login: ILogin = {
      userName: this.inputUser,
      password: this.inputPwd
    }

    this.confirm.emit(login);
  }

  passwordRecovery() {
    this.pwdRecovery.emit(true);
  }

  registerNewUser() {
    this.registerUser.emit(true);
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
        this.confirmButton();
        break;
      case 'Escape':
        this.cancelButton();
        break;
      default:
        break;
    }
  }
}
