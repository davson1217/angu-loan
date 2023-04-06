import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css'],
})
export class FormErrorComponent implements OnInit {
  @Input() control: FormControl<string | null> = new FormControl('');
  @Input() controlName: string = '';
  constructor() {}

  ngOnChanges(): void {}

  ngOnInit(): void {}
}
