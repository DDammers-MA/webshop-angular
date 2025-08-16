import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService)
  value!: string;


  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  submit() {
    if (this.form.valid) {
      this.authService.signInWithForm(this.form.value.email || '', this.form.value.password || '')
    }
  }
  }

