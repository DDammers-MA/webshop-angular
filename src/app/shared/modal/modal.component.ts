import { Component, inject, input, output } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-modal',
  standalone: false,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {


  dialogeService = inject(DialogService)
  show = this.dialogeService.show
  type = this.dialogeService.type

  subject = input.required<string>()

  closeModal = output()

  close() {
    this.closeModal.emit()
  }

  onsubmit = output<any>()

  onSubmit(answer: string) {

    this.onsubmit.emit(answer)
    this.close()
    
  }

}
