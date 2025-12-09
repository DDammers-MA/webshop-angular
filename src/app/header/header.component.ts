import { AfterContentChecked, AfterViewInit, Component, inject } from '@angular/core';
import { AuthService } from '../account/service/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterContentChecked {
  currentUser$!: Observable<any>;
  chosenUserId: any; // bind this to dropdown's chosenOption

  auth = inject(AuthService)

  user = this.auth.currentUser
  isAdmin = this.user.is_admin
  isLoggedIn = this.user.id !== null && this.user.id !== undefined && this.user.id !== ''

  isUserMenuOpen = false;
  private sub = new Subscription();
  public menuItems!: any[]
  
  constructor() {
    this.currentUser$ = this.auth.currentUser$;
  }

    product: any

    ngAfterContentChecked(): void {
      this.getCartItems();
    }



  getCartItems(){
     this.product = JSON.parse(localStorage.getItem('cart') || '[]');

  }

toggleUserMenu(event: MouseEvent) {
  event.preventDefault();
  this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  
  ngOnInit() {

     
    
    // Subscribe to currentUser changes
    this.sub.add(
      this.currentUser$.subscribe(user => {
        if (user && user.id) {
          this.user = user;
          this.chosenUserId = user.id;
          this.isAdmin = !!user.is_admin;
          this.isLoggedIn = true;
        } else {
          this.user = { id: null, is_admin: false };
          this.chosenUserId = null;
          this.isAdmin = false;
          this.isLoggedIn = false;
        }
      })
    );
     this.getUserMenu();

   
    
  }

    ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getUserMenu() {
    this.menuItems = [
     {
        label: 'profile',
        value: 'profiel',
        // visible: admin || asiel || user,
        link: '/mijn-dierenasiels/profiel',
      },
         {
        label: 'dashboard',
        value: 'profiel',
        visible: this.isAdmin,
        link: '/dashboard',
      },
           {
        label: 'Logout',
        value: 'profiel',
        // visible: admin || asiel || user,
        link: '/logout',
      },
    ]
  }

}
