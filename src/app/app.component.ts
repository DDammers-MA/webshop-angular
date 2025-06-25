import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowHeaderService } from './services/showHeaser.service';

@Component({
  selector: 'app-root',
  standalone: false,
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'webshop';

  showHeaderService = inject(ShowHeaderService)

  headerVisible = true

ngOnInit(): void {
  this.showHeaderService.showHeader$.subscribe(value => {
    this.headerVisible = value;
  });
}
  
  // onShowHeader(value: boolean) {
    
  //   this.headerVisible = value
  // }
}
