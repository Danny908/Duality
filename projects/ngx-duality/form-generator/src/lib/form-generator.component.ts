import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'duality-form-generator',
  template: `
  <form
  [formGroup]="formGroup"
  (ngSubmit)="submitForm()">
    <ng-container
      *ngFor="let field of fields"
      dualityFormGenerator
      [group]="formGroup"
      [field]="field">
    </ng-container>
  </form>
  `,
  styles: []
})
export class FormGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
