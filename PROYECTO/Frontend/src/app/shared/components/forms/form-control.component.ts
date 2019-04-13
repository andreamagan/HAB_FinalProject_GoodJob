import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'esn-form-control',
  templateUrl: './form-control.component.html',
})

export class FormControlComponent {
  @Input() control: FormControl;
  @Input() group?: FormGroup;

  errorIcon: IconProp = faExclamationTriangle;
}
