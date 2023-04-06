import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { formatCurrency } from '@angular/common';

export function amountValidator(
  minValue: number,
  maxValue: number,
  controlName: string,
  controlFormatName: string
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const input = Number(control.value);
    const finiteInput = input / 1000;

    if (input && finiteInput < minValue) {
      return {
        [controlName]: {
          min: `The minimum required ${controlFormatName} is ${formatCurrency(
            minValue,
            'en',
            '€',
            'EUR'
          )} `,
        },
      };
    }

    return null;
  };
}

export function loanTermValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const input = Number(control.value);
    const minValue = 36;
    const maxValue = 360;
    const valueInMonths = input * 12;
    const minValueInYears = minValue / 12;
    const maxValueInYears = maxValue / 12;

    if (valueInMonths) {
      if (valueInMonths < minValue) {
        return {
          loanTerm: {
            min: `The minimum required loan term is ${minValueInYears} years`,
          },
        };
      } else if (valueInMonths > maxValue) {
        return {
          loanTerm: {
            max: `The maximum permissible loan duration is ${maxValueInYears} years`,
          },
        };
      }
    }

    return null;
  };
}
