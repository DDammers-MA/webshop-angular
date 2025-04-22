import { Component, inject, OnInit } from '@angular/core';
import { usersService } from './users.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  usersService = inject(usersService)
  customers!: any[];
  users: any[] = []
  representatives!: any[];
 

  ngOnInit(): void {
    this.getData()

  }


  getData() {
    this.usersService.loadUsers().subscribe({
      next: (res: any) => {
        this.users = res
     
      }
    })
  }


  

}
