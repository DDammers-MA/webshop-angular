import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RouterModule, RouterLink } from '@angular/router';






@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
   
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterModule
],
  exports: [LoginComponent]

  
})
export class AccountModule { }
