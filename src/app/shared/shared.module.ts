import { NgModule } from "@angular/core";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { ModalComponent } from "./modal/modal.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [ProjectCardComponent, ModalComponent, DropdownComponent],
    imports: [CommonModule, RouterLink],
    exports: [ProjectCardComponent, ModalComponent, DropdownComponent]
})
export class SharedModule { }
