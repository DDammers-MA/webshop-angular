import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { usersService } from './users.service';
import { Params } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DialogService } from '../../services/dialog.service';
import { ModalComponent } from '../../shared/modal/modal.component';
import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

export interface FilterChangedEventArgs {
  filter: any;
  list: string;
  dofunctionActualfilter?: boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: false,
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usersService = inject(usersService);
  customers!: any[];
  users: any[] = [];
  representatives!: any[];
  list: string = '';
  load = true;
  title = 'Create new user';

  dialogService = inject(DialogService);

  type!: any;

  form: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    email: new UntypedFormControl(''),
    isAdmin: new UntypedFormControl(''),
  });

  formdata: any;

  change: any;

  userOptions = [
    { label: 'admin', value: 1 },
    { label: 'user', value: 0 },
  ];

  // displayedColumns: string[] = ['id', 'name', 'email', 'status', 'created_at', 'verified', 'actions'];
  // dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  EditUser(user: any) {
    console.log(event, "event");

    
    this.title = "Edit user";
    this.formdata = user;
    this.openModal('edit');
  
}



  ngOnInit(): void {
    this.load = true
    // this.openModal('users')
    this.getData();


    // this.form.valueChanges.subscribe(() => {
    //   this.onFilterChange({
    //     filter: this.form.value,
    //     list: 'users'
    //   });
    // });
  }

  openModal(type: string) {
 
    this.dialogService.type = type; // Set the modal type dynamically
    this.dialogService.openModal(); // Corrected the typo
  }

  getFilter() {
    const filterArg = { ...this.form.value };
    // Convert multiselect filter array's to lists
    if (Array.isArray(this.form.value.isAdmin)) {
      filterArg.isAdmin = String(this.form.value.isAdmin);
    }

    for (const key in filterArg) {
      if (filterArg[key] === '' || filterArg[key] === 'x') {
        filterArg[key] = null;
      }
    }

    return filterArg;
  }

  onFilterChange() {
    this.getData();
  }

  getData(event: any = {}) {
    
    const f = this.getFilter();

    this.usersService.loadUsers(f).subscribe({
      next: (users: any) => {
        this.users = users;
        // this.dataSource.data = users;

        this.load = false;
        
      },

      error: () => {
      this.load = false; // important to reset on error too
    },
    });
  }

  debounce(func: Function, wait: number, immediate: boolean = false) {
    var timeout: any;
    return function () {
      // @ts-expect-error
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  dbOnFilterChange = this.debounce(() => this.getData(), 500);
}
