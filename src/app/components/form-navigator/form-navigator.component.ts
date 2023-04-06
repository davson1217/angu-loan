import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { NavigatorService } from '../../services/navigator.service';
import { FormGroupData } from '../../model/form';
import { Field, FormPhase } from '../../model/phase';

@Component({
  selector: 'app-form-navigator',
  templateUrl: './form-navigator.component.html',
  styleUrls: ['./form-navigator.component.css'],
})
export class FormNavigatorComponent implements OnInit {
  message: string;
  @Input() phase: FormPhase;
  @Input() loanForm: FormGroup<FormGroupData>;
  @Input() activePhase: FormPhase;
  @Input() phases: FormPhase[];
  @Output() phaseClick: EventEmitter<FormPhase>;

  constructor(private navigatorService: NavigatorService) {
    this.message = '';
    this.phases = [];
    this.phase = { id: 0, title: 'Income & Loan', fields: [] };
    this.activePhase = { id: 0, title: 'Income & Loan', fields: [] };
    this.phaseClick = new EventEmitter<FormPhase>();
    this.loanForm = new FormGroup({
      monthlyIncome: new FormControl(''),
      loanTerm: new FormControl(''),
      // confirm: new FormControl(''),
      requestedAmount: new FormControl(''),
      children: new FormControl(''),
      coApplicant: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  onClick(phase: FormPhase) {
    this.message = this.navigatorService.checkForm(
      this.loanForm,
      this.activePhase,
      this.phases
    );
    this.phaseClick.emit(phase);
  }
}
