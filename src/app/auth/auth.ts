import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth-service';
import { LoadingSpinner } from '../shared/loading-spinner/loading-spinner';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, LoadingSpinner],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  isLoginMode = false;
  isLoading = false;
  isError: boolean = false;;
  error: string = "";

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    // if (!form.valid) {
    //   return;
    // }

    let authObserv: Observable<AuthResponseData>;
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      authObserv = this.authService.login(email, password);
    } else {
      authObserv = this.authService.signup(email, password);
    }

    authObserv.subscribe(
      (response) => {
        console.log('response==', response);
        this.isLoading = false;
        this.isError = false;
        this.router.navigate(['/recipes']);
      },
      (errResponse) => {  
        this.isError = true; 
        this.error = errResponse; 
        this.isLoading = false;

      },
    );

    form.reset();
  }
}
