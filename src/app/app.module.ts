import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormNavigatorComponent } from './components/form-navigator/form-navigator.component';
import { FormComponent } from './components/form/form.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { AmountPipe } from './pipes/amount.pipe';
import { MonthsPipe } from './pipes/months.pipe';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    FormNavigatorComponent,
    FormComponent,
    FormErrorComponent,
    FormFieldComponent,
    AmountPipe,
    MonthsPipe,
    FormButtonComponent,
    AlertComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
