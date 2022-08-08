import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>{{message}}</p>',
  styles: [
    `
      p {
        font-size: 20px;
        color: green;
      }
    `,
  ],
})
export class SuccessAlertComponent {
  message = 'success Alert';
  constructor() {}
}
