import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable()
export class ValidateService {

  constructor() { }

  matchPassword(abstractControl: AbstractControl) {
    const password = abstractControl.get('password').value;
    const passwordConfirm = abstractControl.get('passwordConfirm').value;
    if (password === passwordConfirm) {
      abstractControl.get('passwordConfirm').setErrors(null);
      return null;
    } else {
      /**
       * set error to 'passwordConfirm' element
       */

      abstractControl.get('passwordConfirm').setErrors({mismatch: true});
      /**
       * and don't set error (null) to formGroup
       */
      return null;
    }
  }

  maxTries(abstractControl: AbstractControl) {
    // set error  to form control
    // !! abstractControl.value
    abstractControl.get('code').setErrors({maxTries: true});
    return null; // set no errors to form
    // return {maxTries: true};
  }
}
