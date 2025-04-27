import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'

})

export class DialogService{
    
    

    show = false
    type: string = ''; // Initialize with a default value


    openModal() {
        this.show = true
        console.log('Modal is now visible:', this.show); 
    }

    closeModal() {
        this.show = false
        this.type = ''
        console.log('Modal is now hidden:', this.show);
    }
}