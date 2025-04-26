import { NgModule } from "@angular/core";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  declarations: [ProjectCardComponent, ModalComponent],
    imports: [],
    exports: [ProjectCardComponent, ModalComponent]
})
export class SharedModule { }
