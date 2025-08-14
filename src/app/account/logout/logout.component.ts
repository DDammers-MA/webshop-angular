import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  authservice = inject(AuthService)
  router = inject(Router)

  ngOnInit(): void {
    this.router.navigate(["/"])
    this.authservice.logout()
    
  }

}
