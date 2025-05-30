/*
Kylie Brown 
may 25th 2025
*/

import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[countryValidator]',
    providers: [
        {
            provide: NG_VALIDATORS, 
            useExisting: CountryValidatorDirective, 
            multi: true
        }
    ]
})
export class CountryValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        return control.value === 'Canada' ? null : { countryNotCanada: true };
    }
}