import { Component, EventEmitter, inject, Input, OnInit, output, Output } from '@angular/core';
import { AuthService } from '../account/service/auth.service';
import { DialogService } from '../services/dialog.service';
import { ShowHeaderService } from '../services/showHeaser.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showheaderService = inject(ShowHeaderService)
  dialogService = inject(DialogService)
  Auth = inject(AuthService)

  user = this.Auth.currentUser
 
  isSidebarCollapsed = false;


  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

showHeader = output<any>()

  ngOnInit(): void {
  
    this.showheaderService.setShowHeader(false)

  // this.showHeader.emit(false)
  // console.log(this.showHeader);
  
}



}
