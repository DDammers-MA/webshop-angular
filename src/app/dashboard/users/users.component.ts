import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { usersService } from './users.service';
import { Params } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { TableLazyLoadEvent } from 'primeng/table';
import { DialogService } from '../../services/dialog.service';
import { ModalComponent } from '../../shared/modal/modal.component'; 
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';

  
export interface FilterChangedEventArgs {
  filter: any
  list: string
  dofunctionActualfilter?: boolean
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: false,
  styleUrls: ['./users.component.scss'],


})
export class UsersComponent implements OnInit {
    usersService = inject(usersService)
  customers!: any[];
  users: any
  representatives!: any[];
  list: string = ''

  dialogService = inject(DialogService)

  type!: any
  
  form: UntypedFormGroup = new UntypedFormGroup({

    name: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    isAdmin: new UntypedFormControl(''),
  })
  change: any;

  userOptions = [
    { label: 'admin', value: 1 },
    {label: 'user', value: 0}
  ]
 

  ngOnInit(): void {

      this.getData()
    
    // this.form.valueChanges.subscribe(() => {
    //   this.onFilterChange({
    //     filter: this.form.value,
    //     list: 'users'
    //   });
    // });
  
  }

  openModal(type: string, event: any) {
    

    console.log('Opening modal');
    this.dialogService.type = type; // Set the modal type dynamically
    this.dialogService.openModal(); // Corrected the typo
  }


 
  getFilter() {
    const filterArg = { ...this.form.value }
    // Convert multiselect filter array's to lists
    if (Array.isArray(this.form.value.isAdmin)) {
      filterArg.isAdmin = String(this.form.value.isAdmin)
    }

    for (const key in filterArg) {
      if (filterArg[key] === '' || filterArg[key] === 'x') {
        filterArg[key] = null
      }
    }

    return filterArg
  }

  onFilterChange() {
    this.getData()
  }



  getData(event: TableLazyLoadEvent = {}) {
      

    const f = this.getFilter()

      this.usersService.loadUsers(f).subscribe({
        next: (users: any) => {
          this.users = users
          console.log(this.users);
        
     
        }
      })
  }


  debounce(func: Function, wait: number, immediate: boolean = false) {
    var timeout: any
    return function () {
      // @ts-expect-error
      var context = this,
        args = arguments
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  dbOnFilterChange = this.debounce(() => this.getData(), 500)
}





