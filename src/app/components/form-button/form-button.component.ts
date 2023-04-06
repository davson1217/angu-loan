import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormGroupData } from '../../model/form';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css'],
})
export class FormButtonComponent implements OnInit {
  @Input() loanForm: FormGroup<FormGroupData> = new FormGroup({
    monthlyIncome: new FormControl(''),
    loanTerm: new FormControl(''),
    // confirm: new FormControl(''),
    requestedAmount: new FormControl(''),
    children: new FormControl(''),
    coApplicant: new FormControl(''),
  });
  @Output() click = new EventEmitter();
  constructor() {}

  ngOnChanges(): void {
    const formValid = this.loanForm.status === 'VALID';
  }
  ngOnInit(): void {}

  buttonClick(event: Event): void {
    this.click.emit(event);
  }
}
