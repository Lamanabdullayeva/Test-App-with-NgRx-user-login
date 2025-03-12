import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  template: `<h2>Login Page</h2>`,
  styles: [
    `
      h2 {
        color: blue;
      }
    `,
  ],
})
export class LoginComponent {}
