import { FormControl } from '@angular/forms';

export interface FormGroupData {
  monthlyIncome: FormControl<string | null>;
  requestedAmount: FormControl<string | null>;
  loanTerm: FormControl<string | null>;
  children: FormControl<string | null>;
  coApplicant: FormControl<string | null>;
  // confirm: FormControl<string | null>;
}

export interface FormData {
  monthlyIncome: number;
  requestedAmount: number;
  loanTerm: number;
  children: string;
  coapplicant: string;
}
export type ErrorResponseType = { params: string; message: string };
export type SuccessResponseType = { loanAmount: number; interestRate: number };
export interface APIResponse {
  general: {};
  fields: ErrorResponseType[];
  loanAmount: number;
  interestRate: number;
}
