import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIResponse, FormData } from '../model/form';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': 'swb-222222',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'https://homework.fdp.workers.dev/';
  constructor(private http: HttpClient) {}

  submitLoanForm(form: FormData): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.apiUrl, form, httpOptions);
  }
}
