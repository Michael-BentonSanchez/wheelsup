import { Component } from '@angular/core';
import { SignInData } from '../../models/signin.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signInData: SignInData = {email: '', password: ''};
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    const loggedIn = await this.authService.login(this.signInData);
    if (loggedIn) {
      this.router.navigate(['home']);
    } else {
      this.errorMessage = 'Invalid email or password!';
    }
  }

}
