import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
   
  ],
  imports: [
      FormsModule,
    ReactiveFormsModule,

    ],
  exports: [LoginComponent]

  
})
export class AccountModule { }
