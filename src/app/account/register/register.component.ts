import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  authService = inject(AuthService)


  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),  
    email: new FormControl(''),
    password: new FormControl(''),

  });


  submit() {

     if (this.form.valid) {
    this.authService.register(this.form.value);
  }
  }

}
