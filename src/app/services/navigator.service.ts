import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGroupData } from '../model/form';
import { FormPhase } from '../model/phase';

@Injectable({
  providedIn: 'root',
})
export class NavigatorService {
  constructor() {}

  checkForm(
    loanForm: FormGroup<FormGroupData>,
    activePhase: FormPhase,
    formPhases: FormPhase[]
  ): string {
    const { status, pristine, controls, touched } = loanForm;

    if (status === 'INVALID') {
      if (pristine && !touched) {
        return 'All fields are mandatory to apply for a loan';
      } else if (touched) {
        let touched: Set<string> = new Set();
        let touchedField = '';
        for (const [key, value] of Object.entries(controls)) {
          if (value.touched) {
            const touchedPhase = formPhases.find((phase) =>
              phase.fields.find((field) => field.title === key)
            );
            if (touchedPhase) {
              touched.add(touchedPhase.title);
              touchedField += key + ', ';
            }
          }
        }
        if (touched.has(activePhase.title)) {
          return `Please give answers to <b>${touchedField.slice(
            0,
            touchedField.length - 1
          )}</b> in the ${[...touched].toString()} loan phase${
            touched.size > 1 ? 's' : ''
          }`;
        }

        return '';
      }
    }

    return 'Completed';
  }
}
