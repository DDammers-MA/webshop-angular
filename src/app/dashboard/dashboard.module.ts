import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "../home/home.component";

@NgModule({
    declarations: [DashboardComponent, SidebarComponent],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        RouterOutlet,
        RouterLink,

    
    ],
    exports: [DashboardComponent],
    
})

export class DashboardModule { 


}