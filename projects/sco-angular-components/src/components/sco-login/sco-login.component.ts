import { ScoFormErrorsService } from './../../services/sco-form-errors/sco-form-errors.service';
import { ScoFormError } from './../../services/sco-form-errors/sco-form-error.model';
import { ILogin } from './model/sco-login.model';
import { ScoConstantsService } from '../../services/sco-constants.service';
import { Component, Input, Output, ViewEncapsulation, EventEmitter, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sco-login',
  templateUrl: './sco-login.component.html',
  styleUrls: ['./sco-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScoLoginComponent implements OnChanges {

  @Input() labelUser: string = 'Usuario';
  @Input() labelPassword: string = 'Contraseña';
  @Input() labelCancel: string = 'Cancelar';
  @Input() labelConfirm: string = 'Acceder';
  @Input() labelPwdRecovery: string = 'Recuperar contraseña';
  @Input() showLabelPwdRecovery: boolean = true;
  @Input() labelUserRegister: string = 'Registrar usuario';
  @Input() showLabelUserRegister: boolean = true;
  @Input() formErrors: ScoFormError[] = [];

  @Output() cancel: EventEmitter<boolean>;
  @Output() confirm: EventEmitter<ILogin>;
  @Output() pwdRecovery: EventEmitter<boolean>;
  @Output() registerUser: EventEmitter<boolean>;

  public showPassword: boolean;
  public loginForm: FormGroup;

  constructor(
    public readonly constantsService: ScoConstantsService,
    public readonly formErrorsService: ScoFormErrorsService,
  ) { 
    this.cancel = new EventEmitter<boolean>();
    this.confirm = new EventEmitter<ILogin>();
    this.pwdRecovery = new EventEmitter<boolean>();
    this.registerUser = new EventEmitter<boolean>();

    this.showPassword = false;
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes["formErrors"] && changes["formErrors"].currentValue) {
        const formErrors: ScoFormError[] = changes["formErrors"].currentValue;

        if (formErrors && formErrors.length > 0) {
          this.formErrors = formErrors;
          this.loginForm = this.formErrorsService.setErrors(this.loginForm, this.formErrors);
        }
      }
    }
  }

  showHidePassowrd() {
    this.showPassword = !this.showPassword;
  }

  cancelButton() {
    this.loginForm = this.formErrorsService.cleanErrors(this.loginForm);
    this.cancel.emit(true);
  }

  confirmButton() {
    const login: ILogin = this.loginForm.value;
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
