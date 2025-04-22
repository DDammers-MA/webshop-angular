import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "../home/home.component";
import { UsersComponent } from "./users/users.component";
import { TableModule } from 'primeng/table';
import { Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from 'primeng/button';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import Aura from '@primeng/themes/aura';



@NgModule({
    declarations: [DashboardComponent, SidebarComponent, UsersComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterOutlet,
        RouterLink,
        TableModule,
        ReactiveFormsModule,
        FormsModule,
        ButtonModule,

        TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule

    
    ],
    exports: [DashboardComponent],
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
          theme: {
            preset: Aura
          }
      
        })
    ]
    
})

export class DashboardModule { 


}