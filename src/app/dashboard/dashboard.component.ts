import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../account/service/auth.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  dialogService = inject(DialogService)
  Auth = inject(AuthService)

  user = this.Auth.currentUser
 
  isSidebarCollapsed = false;


  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }



}
