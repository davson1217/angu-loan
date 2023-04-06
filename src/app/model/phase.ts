export declare type PhaseType = 'Income & Loan' | 'Personal Data' | 'Review';
export declare type ChildrenOption = 'NONE' | 'SINGLE' | 'MULTIPLE';
export declare type CoApplicantOption =
  | 'NONE'
  | 'SINGLE_BORROWER'
  | 'MULTIPLE_BORROWERS';

export enum PhaseNum {
  INCOME_AND_LOAN = 1,
  PERSONAL_DATA,
  CONFIRM,
}

export type Field = {
  id: number;
  title: string;
};

export interface FormPhase {
  id: number;
  title: 'Income & Loan' | 'Personal Data' | 'Confirm';
  fields: Field[];
}
