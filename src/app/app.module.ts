import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './account/login/login.component';
import { AccountModule } from './account/account.module';
import { HeaderModule } from './header/header.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { PortalModule } from '@angular/cdk/portal';
import { DialogService } from './services/dialog.service';
import { ModalComponent } from './shared/modal/modal.component';
import { UserModalComponent } from './dashboard/users/user-modal/user-modal.component';
import { RegisterComponent } from './account/register/register.component';
import { LogoutComponent } from './account/logout/logout.component';




@NgModule({
  declarations: [AppComponent],
  imports: [


    PortalModule,
    DashboardModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    HeaderModule,
    CommonModule,
    BrowserModule,
    AccountModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login'
      },
        {
        path: 'logout',
        component: LogoutComponent,
        title: 'logout'
      },
            {
        path: 'register',
        component: RegisterComponent,
        title: 'register'
      },
      {
        path: 'dashboard', 
        component: DashboardComponent,
        title: 'dashboard',
        children: [
          { path: 'users', component: UsersComponent, title: 'users' }
        ]
      } // Add this line for the dashboard route,
    ])
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
