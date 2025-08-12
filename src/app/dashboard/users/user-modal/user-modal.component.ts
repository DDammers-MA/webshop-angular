import { Component, inject, OnInit, output } from '@angular/core';
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

  reload = output()
  loadingChange = output<boolean>()


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
      this.loadingChange.emit(true);
      this.userService.createUsers(this.form.value).subscribe({
        next: (item: any) => {
          console.log(item);
          
          this.reload.emit();
          this.loadingChange.emit(false);

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
