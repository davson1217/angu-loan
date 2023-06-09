import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNavigatorComponent } from './form-navigator.component';

describe('FormNavigatorComponent', () => {
  let component: FormNavigatorComponent;
  let fixture: ComponentFixture<FormNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
