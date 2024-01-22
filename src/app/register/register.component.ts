import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  error: string = '';
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z]{1,}(@|$|#)[0-9]{6,}$/),
    ]),
  });

  submitRegister(formInfo: FormGroup) {
    this._AuthService.register(formInfo.value).subscribe(
      (response) => {
        if (response.status_code == 200) {
          this._Router.navigate(['/login']);
        }
      },
      (error) => {
        this.error = 'error message';
      }
    );
  }
  ngOnInit(): void {}
}
