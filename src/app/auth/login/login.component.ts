import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from '../auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Login</h2>
    <form (submit)="login()">
      <input type="email" [(ngModel)]="email" placeholder="Email" required />
      <input
        type="password"
        [(ngModel)]="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  `,
  styles: [
    `
      h2 {
        color: blue;
      }
    `,
  ],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private store: Store) {}

  login() {
    this.store.dispatch(
      AuthActions.login({ email: this.email, password: this.password })
    );
  }
}
