import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SignInData } from '../models/signin.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Inject AngularFireAuth
  constructor(private auth: AngularFireAuth) { }

  async login(SignInData: SignInData): Promise<boolean> {
    try {
      await this.auth.signInWithEmailAndPassword(SignInData.email, SignInData.password);
      return true;
    } catch (error) {
      return false;
    }
  }


}
