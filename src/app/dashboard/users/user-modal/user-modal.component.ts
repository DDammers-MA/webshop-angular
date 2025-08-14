import { Component, inject, input, OnInit, output, SimpleChanges } from '@angular/core';
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

  title = input<any>()

  formdata = input<any>();

  reload = output()
  loadingChange = output<boolean>()


  form: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(''),
    name: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    is_admin: new UntypedFormControl(''),
    password: new UntypedFormControl(''),


  })
  
  ngOnInit(): void {


    // if (this.formdata) {
    //   console.log('formdata', this.formdata);
      
    //   this.form.patchValue(this.formdata);
  
    // }
  }

ngOnChanges(changes: SimpleChanges): void {
  if (changes['formdata']) {
    const data = changes['formdata'].currentValue;
    if (data) {
      this.form.patchValue(data);
    } else {
      this.form.reset();
    }
  }
}


  submit() {
    if (this.formdata()?.id) {
      this.userService.updateUser(this.formdata().id, this.form.value).subscribe({
        next: (item: any) => {
          this.reload.emit();
          this.loadingChange.emit(false);
        },
        error: (err: any) => {
          console.error('Error updating user:', err);
          this.loadingChange.emit(false);
        }
      });
      this.dialogService.closeModal();
      console.log('Form submitted successfully', this.form.value);
    }
    else {
      
 
    if (this.form.valid) {
      this.loadingChange.emit(true);
      this.userService.createUsers(this.form.value).subscribe({
        next: (item: any) => {
          this.reload.emit();
          this.loadingChange.emit(false);

        }
      })
      this.dialogService.closeModal();
      console.log('Form submitted successfully', this.form.value);
    } 
       }
  }


close() {

  this.dialogService.closeModal()
}
}
