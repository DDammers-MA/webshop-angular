import { Component, inject, OnInit } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { UsersComponent } from '../users.component';
import { usersService } from '../users.service';

@Component({
  selector: 'app-user-modal',
  standalone: false,
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent implements OnInit {

  dialogService = inject(DialogService)
  userService = inject(usersService);
type: any;
  subject: any;


  form: UntypedFormGroup = new UntypedFormGroup({

    name: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    is_admin: new UntypedFormControl(''),
    password: new UntypedFormControl(''),


  })
  
ngOnInit(): void {
  console.log('hallo');
  
  }
  
  submit() {
    if (this.form.valid) {
      this.userService.createUsers(this.form.value).subscribe({
        next: (item: any) => {

        }
      })
      this.dialogService.closeModal();
      console.log('Form submitted successfully', this.form.value);
      

    } else {
      
    }
    
  }


close() {

  this.dialogService.closeModal()
}
}
