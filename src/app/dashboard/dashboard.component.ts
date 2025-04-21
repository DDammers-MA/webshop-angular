import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../account/service/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {


  Auth = inject(AuthService)

  user = this.Auth.currentUser

  ngOnInit() {
    console.log(this.user)
  }
  

}
