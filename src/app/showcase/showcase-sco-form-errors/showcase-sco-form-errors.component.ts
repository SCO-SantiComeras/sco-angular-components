import { ScoConstantsService } from './../../../../projects/sco-angular-components/src/services/sco-constants.service';
import { ScoToastService } from './../../../../projects/sco-angular-components/src/components/sco-toast/sco-toast.service';
import { ScoFormErrorsService } from './../../../../projects/sco-angular-components/src/services/sco-form-errors/sco-form-errors.service';
import { ScoFormError } from './../../../../projects/sco-angular-components/src/services/sco-form-errors/sco-form-error.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class FormValidationClass {
  name: string;
  secondName: string;
  address: string;
}

@Component({
  selector: 'app-showcase-sco-form-errors',
  templateUrl: './showcase-sco-form-errors.component.html',
  styleUrls: ['./showcase-sco-form-errors.component.scss']
})
export class ShowcaseScoFormErrorsComponent implements OnInit {

  public validationForm: FormGroup;
  public formErrors: ScoFormError[];

  constructor(
    public readonly formErrorsService: ScoFormErrorsService,
    public readonly toastService: ScoToastService,
    public readonly constantsService: ScoConstantsService,
  ) { }

  ngOnInit() {
    this.validationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      secondName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });

    this.formErrors = [];
  }

  onClickSubmitForm() {
    const formValidationClass: FormValidationClass = this.validationForm.value;

    this.validateFormValues(formValidationClass);
    if (this.formErrors && this.formErrors.length > 0) {
      return;
    }

    this.toastService.addSuccessMessage('Éxito', 'Formulario validado correctamente: ' + JSON.stringify(formValidationClass));
  }

  onClickCancelForm() {
    this.validationForm = this.formErrorsService.cleanErrors(this.validationForm);
  }

  private validateFormValues(formValidationClass: FormValidationClass) {
    this.formErrors = [];

    if (!formValidationClass.name) {
      this.formErrors.push({ 
        formControlName: 'name', 
        error: 'Nombre no reportado',
      });
    }

    if (!formValidationClass.secondName) {
      this.formErrors.push({ 
        formControlName: 'secondName', 
        error: 'Apellidos no reportados',
      });
    }

    if (!formValidationClass.address) {
      this.formErrors.push({ 
        formControlName: 'address', 
        error: 'Dirección no reportada',
      });
    }

    this.validationForm = this.formErrorsService.setErrors(this.validationForm, this.formErrors);
  }
}
