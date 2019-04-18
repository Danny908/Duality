import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGeneratorComponent } from './form-generator.component';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { InputComponent } from './fields/input/input.component';
import { SelectComponent } from './fields/select/select.component';
import { RadioComponent } from './fields/radio/radio.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { Component, ContentChild } from '@angular/core';

@Component({
  template: `
    <duality-form-generator [fields]="fields">
      <ng-template
        #dualityInputTemplate
        let-form="form"
        let-controlName="controlName"
        let-field="field">
        <div
          class="customInput"
          [formGroup]="form">
          <label>My custom input
            <input [formControlName]="controlName"/>
          </label>
        </div>
      </ng-template>
      <ng-template
        #dualitySelectTemplate
        let-form="form"
        let-controlName="controlName"
        let-field="field">
        <div
          class="customSelect"
          [formGroup]="form">
          <label>My custom select
            <select [formControlName]="controlName">
              <option>Custom</option>
            </select>
          </label>
        </div>
      </ng-template>
      <ng-template
        #dualityRadioTemplate
        let-form="form"
        let-controlName="controlName"
        let-field="field">
        <div
          class="customRadio"
          [formGroup]="form">
          <label>My custom radio
            <input [formControlName]="controlName" type="radio" value="0"/>
            <input [formControlName]="controlName" type="radio" value="1"/>
          </label>
        </div>
      </ng-template>
      <ng-template
        #dualityCheckboxTemplate
        let-form="form"
        let-controlName="controlName"
        let-field="field">
        <div
          class="customCheckbox"
          [formGroup]="form">
          <label [formArrayName]="controlName" >My custom radio
            <input formControlName="0" type="chekcbox" value="0"/>
            <input formControlName="1" type="chekcbox" value="1"/>
          </label>
        </div>
      </ng-template>
      <ng-template
        #dualityTextareaTemplate
        let-form="form"
        let-controlName="controlName"
        let-field="field">
        <div
          class="customTextarea"
          [formGroup]="form">
          <label>My custom textarea
            <textarea [formControlName]="controlName"></textarea>
          </label>
        </div>
      </ng-template>
    </duality-form-generator>
  `
})
class MockComponent {
  public fields;
}

fdescribe('FormGeneratorComponent', () => {
  let component: FormGeneratorComponent;
  let fixture: ComponentFixture<FormGeneratorComponent>;
  let mockComponent: MockComponent;
  let mockFixture: ComponentFixture<MockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        MockComponent,
        FormGeneratorComponent,
        InputComponent,
        SelectComponent,
        RadioComponent,
        CheckboxComponent,
        TextareaComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGeneratorComponent);
    component = fixture.componentInstance;
    component.fields = {
      name: {
        label: 'Name',
        valueParam: 'name',
      },
      gender: {
        label: 'Gender',
        tag: 'radio',
        valueParam: 'gender',
        options: [{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]
      },
      birthday: {
        label: 'Birthday',
        tag: 'group',
        classes: 'group',
        group: {
          day: {
            label: 'Day',
            tag: 'select',
            options: [
              'Mon',
              'Tue',
              'Wed',
              '...'
            ],
            validators: [ Validators.required ],
            customErrors: {
              required: 'Day is missing!'
            },
          },
          month: {
            label: 'Month',
            tag: 'select',
            options: [
              '01',
              '02',
              '03',
              '...'
            ]
          },
          year: {
            label: 'Year',
            tag: 'select',
            options: [
              '1990',
              '1991',
              '1992',
              '...'
            ]
          },
        }
      },
      favColor: {
        label: 'Favourite Color',
        tag: 'checkbox',
        options: ['Red', 'Blue', 'Black', 'Yellow'],
      },
      resume: {
        label: 'Resume',
        tag: 'textarea'
      }
    };
    component.data = {
      name: 'Daniel',
      gender: 'male',
    };
    fixture.detectChanges();
    mockFixture = TestBed.createComponent(MockComponent);
    mockComponent = mockFixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form wrapper tag', () => {
    const form = fixture.debugElement.query(By.css('form'));
    expect(form).toBeTruthy();
  });

  it('should have a submit button', () => {
    const submit = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(submit).toBeTruthy();
  });

  it('should have reset button if resetBtn is true', () => {
    component.resetBtn = true;
    fixture.detectChanges();
    const reset = fixture.debugElement.query(By.css('button[type="reset"]'));
    expect(reset).toBeTruthy();
  });

  it('should have an instance of each field component (input, select, radio, checkbox, textarea)', () => {
    const input = fixture.debugElement.query(By.css('div[duality-input]'));
    const select = fixture.debugElement.query(By.css('div[duality-select]'));
    const radio = fixture.debugElement.query(By.css('div[duality-radio]'));
    const checkbox = fixture.debugElement.query(By.css('div[duality-checkbox]'));
    const textarea = fixture.debugElement.query(By.css('div[duality-textarea]'));
    const group = fixture.debugElement.query(By.css('label.dl-label.dl-label-group'));
    expect(input && select && radio && checkbox && textarea && group).toBeTruthy();
  });

  it('should have an error message container if field is invalid', () => {
    const { form } = component;
    const formControl = form.get('name');
    formControl.markAsDirty();
    formControl.markAsTouched();
    fixture.detectChanges();
    const error = fixture.debugElement.query(By.css('p.dl-error'));
    expect(error).toBeTruthy();
  });

  it('should render custom fields template', () => {
    const {
      dualityInputTemplate,
      dualitySelectTemplate,
      dualityRadioTemplate,
      dualityCheckboxTemplate,
      dualityTextareaTemplate
    } = mockFixture.debugElement.children[0].componentInstance;

    component.dualityInputTemplate = dualityInputTemplate;
    component.dualitySelectTemplate = dualitySelectTemplate;
    component.dualityRadioTemplate = dualityRadioTemplate;
    component.dualityCheckboxTemplate = dualityCheckboxTemplate;
    component.dualityTextareaTemplate = dualityTextareaTemplate;
    fixture.detectChanges();

    const customInput = fixture.debugElement.query(By.css('div.customInput'));
    const input = fixture.debugElement.query(By.css('div[duality-input]'));
    const customSelect = fixture.debugElement.query(By.css('div.customSelect'));
    const select = fixture.debugElement.query(By.css('div[duality-select]'));
    const customRadio = fixture.debugElement.query(By.css('div.customRadio'));
    const radio = fixture.debugElement.query(By.css('div[duality-radio]'));
    const customCheckbox = fixture.debugElement.query(By.css('div.customCheckbox'));
    const checkbox = fixture.debugElement.query(By.css('div[duality-checkbox]'));
    const customTextarea = fixture.debugElement.query(By.css('div.customTextarea'));
    const textarea = fixture.debugElement.query(By.css('div[duality-textarea]'));

    expect(customInput && customSelect && customRadio && customCheckbox && customTextarea).toBeTruthy();
    expect(input && select && radio && checkbox && textarea).toBeFalsy();
  });

  it('should return a form instance based on fields value', () => {
    const keys = Object.keys(component.fields);
    keys.forEach(k => {
      expect(component.form.get(k)).toBeTruthy();
    });
  });

  it('should have the same value based on data value', () => {
    const keys = Object.keys(component.data);
    keys.forEach(k => {
      expect(component.form.get(k).value).toBe(component.data[k]);
    });
  });

  it('should allow custom error messages', () => {
    const { form } = component;
    const formControl = form.get('birthday').get('day');
    formControl.markAsDirty();
    formControl.markAsTouched();
    fixture.detectChanges();
    const customError = component.fields.birthday.group.day.customErrors.required;
    const error = fixture.debugElement.query(By.css('div.group > p.dl-error')).nativeElement.textContent;
    expect(error).toBe(customError);
  });

});
