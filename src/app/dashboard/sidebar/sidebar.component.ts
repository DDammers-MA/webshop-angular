import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();


  menuItems: any[] = [
    {
      link: '/',
      icon: 'fas fa-home',
      label: 'Home',
      isOpen: false,
      // children: [
      //   { icon: 'fas fa-chart-pie', label: 'Analytics' },
      //   { icon: 'fas fa-tasks', label: 'Projects' },
      // ]
    },
    {
      link: 'users',
      icon: 'fas fa-cog',
      label: 'Users',
      isOpen: false,
      // children: [
      //   { icon: 'fas fa-user', label: 'Profile' },
      //   { icon: 'fas fa-lock', label: 'Security' },
      // ]
    },
    {
      icon: 'fas fa-envelope',
      label: 'Messages'
    },
        {
      link: '/logout',
      icon: 'fas fa-cog',
      label: 'Logout',
      isOpen: false,
      // children: [
      //   { icon: 'fas fa-user', label: 'Profile' },
      //   { icon: 'fas fa-lock', label: 'Security' },
      // ]
    },
  ];
  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: any) {
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }
  
}
