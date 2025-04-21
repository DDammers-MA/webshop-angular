import { Component, inject } from '@angular/core';
import { AuthService } from '../account/service/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  auth = inject(AuthService)

  user = this.auth.currentUser
  isAdmin = this.user.is_admin
  isLoggedIn = this.user.id !== null && this.user.id !== undefined && this.user.id !== ''

}
