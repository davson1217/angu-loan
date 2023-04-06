import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {
  ChildrenOption,
  CoApplicantOption,
  FormPhase,
  PhaseNum,
} from '../../model/phase';
import {
  amountValidator,
  loanTermValidator,
} from '../../shared/form-validator.directive';
import {
  ErrorResponseType,
  FormData,
  FormGroupData,
  SuccessResponseType,
} from '../../model/form';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  formPhases: Array<FormPhase> = [
    {
      id: PhaseNum.INCOME_AND_LOAN,
      title: 'Income & Loan',
      fields: [
        { id: 1, title: 'monthlyIncome' },
        { id: 2, title: 'requestedAmount' },
        { id: 3, title: 'loanTerm' },
      ],
    },
    {
      id: PhaseNum.PERSONAL_DATA,
      title: 'Personal Data',
      fields: [
        { id: 4, title: 'children' },
        { id: 5, title: 'coApplicant' },
      ],
    },
  ];
  activePhase: FormPhase;
  isFirstPhase: boolean;
  isSecondPhase: boolean;
  isThirdPhase: boolean;
  childrenOption: Array<ChildrenOption> = ['NONE', 'SINGLE', 'MULTIPLE'];
  coApplicantOption: Array<CoApplicantOption> = [
    'NONE',
    'SINGLE_BORROWER',
    'MULTIPLE_BORROWERS',
  ];
  loanForm: FormGroup<FormGroupData> = new FormGroup({
    monthlyIncome: new FormControl('', [
      Validators.required,
      amountValidator(500, 0, 'monthlyIncome', 'monthly income'),
    ]),
    requestedAmount: new FormControl('', [
      Validators.required,
      amountValidator(20000, 0, 'requestedAmount', 'requested amount'),
    ]),
    loanTerm: new FormControl('', [Validators.required, loanTermValidator()]),
    children: new FormControl('', [Validators.required]),
    coApplicant: new FormControl('', [Validators.required]),
    // confirm: new FormControl(''),
  });
  inputClasses = ['form-control', 'form-input'];
  isDisabled = true;
  formSubmissionError: ErrorResponseType[] = [];
  formSubmissionSuccess: SuccessResponseType = {
    loanAmount: 0,
    interestRate: 0,
  };

  constructor(private formService: FormService) {
    this.activePhase = this.formPhases[0];
    this.isFirstPhase = true;
    this.isSecondPhase = false;
    this.isThirdPhase = false;
  }

  ngOnInit(): void {}

  onPhaseClick(phase: FormPhase): void {
    this.activePhase = phase;
    this.isFirstPhase = this.activePhase.id === PhaseNum.INCOME_AND_LOAN;
    this.isSecondPhase = this.activePhase.id === PhaseNum.PERSONAL_DATA;
    this.isThirdPhase = this.activePhase.id === PhaseNum.CONFIRM;
  }
  onFormButtonClick(): void {
    const loanValid = this.loanForm.valid;
  }
  onSubmit() {
    if (this.loanForm.valid) {
      const {
        requestedAmount,
        loanTerm,
        coApplicant,
        children,
        monthlyIncome,
      } = this.loanForm.value;
      const fd: FormData = {
        monthlyIncome: Number(monthlyIncome),
        loanTerm: Number(loanTerm),
        requestedAmount: Number(requestedAmount),
        children: String(children),
        coapplicant: String(coApplicant),
      };
      this.formService.submitLoanForm(fd).subscribe((response) => {
        if (response.fields.length) {
          this.formSubmissionError = response.fields;
        } else {
          this.formSubmissionSuccess = {
            loanAmount: response.loanAmount,
            interestRate: response.interestRate,
          };
        }
      });
    }
  }
}
