import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';




@NgModule({
  declarations: [HeaderComponent],
    imports: [
        RouterLink,
        RouterLinkActive,
      CommonModule,
        SharedModule,
     
    ],
  exports: [HeaderComponent]

  
})
export class HeaderModule { 


}
