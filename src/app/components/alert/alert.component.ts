import { Component, Input, OnInit } from '@angular/core';
import { ErrorResponseType, SuccessResponseType } from '../../model/form';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() formSubmissionError: ErrorResponseType[] = [];
  @Input() formSubmissionSuccess: SuccessResponseType = {
    loanAmount: 0,
    interestRate: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
