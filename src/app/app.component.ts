import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ShowHeaderService } from './services/showHeaser.service';
import { AuthService } from './account/service/auth.service';

@Component({
  selector: 'app-root',
  standalone: false,
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'webshop';

  showHeaderService = inject(ShowHeaderService)

  authService = inject(AuthService)
  router = inject(Router)

  user = this.authService.currentUser;

  headerVisible = true

ngOnInit(): void {
  this.showHeaderService.showHeader$.subscribe(value => {
    this.headerVisible = value;
  });

  if (this.user.isLoggedIn) {
    this.router.navigate(['/'])
  }


}
  
  // onShowHeader(value: boolean) {
    
  //   this.headerVisible = value
  // }
}
