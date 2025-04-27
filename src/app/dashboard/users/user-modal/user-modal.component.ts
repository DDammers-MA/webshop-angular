import { Component, inject, OnInit } from '@angular/core';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-user-modal',
  standalone: false,
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent implements OnInit {

  dialogService = inject(DialogService)
type: any;
  subject: any;
  
ngOnInit(): void {
  console.log('hallo');
  
}

close() {

  this.dialogService.closeModal()
}
}
