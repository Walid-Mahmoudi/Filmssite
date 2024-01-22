import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  error: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{1,}(@|$|#)[0-9]{6,}$/),
    ]),
  });

  submitLogin(formInfo: FormGroup) {
    this._AuthService.login(formInfo.value).subscribe(
      (response) => {
        if (response.status_code == 200) {
          localStorage.setItem('userToken', response.data.token);
          this._AuthService.setUserData();
          this._Router.navigate(['/home']);          
        }
      },
      (error) => {
        this.error = 'error message';
      }
    );
  }
  ngOnInit(): void {}
}
