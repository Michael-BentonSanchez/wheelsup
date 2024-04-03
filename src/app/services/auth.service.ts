import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SignInData } from '../models/signin.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private isAuthenticated: boolean = false;

  // Inject AngularFireAuth
  constructor(private auth: AngularFireAuth) {}

  async login(SignInData: SignInData): Promise<boolean> {
    try {
      await this.auth.signInWithEmailAndPassword(
        SignInData.email,
        SignInData.password
      );
    } catch (error) {
      return false;
    }
    this.isAuthenticated = true;
    return true;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

}
