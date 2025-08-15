import { Component, EventEmitter, input, output, Output } from '@angular/core';

export interface option{
  label: string,
  value: string | number | boolean,
  link?: string,
  disabled?: boolean,
  visible?: boolean,
  dontShowSelect?: boolean
}

@Component({
  selector: 'app-dropdown',
standalone: false,
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
  


export class DropdownComponent {

   public options = input.required<option[]>();

  public placeholder = input<string>();
  public color = input<'green' | boolean>(false);
  
  public chosenOption = input<any>();
  public chosenOptionChange = output<any>();
  @Output() doFunction = new EventEmitter();
  @Output() openedDropdown = new EventEmitter();

  public isDropdownVisible:boolean = false;
  public selectedOption!:option["value"]
  public selectedOptionTitle!:option["value"]

  openEmit(){
    this.openedDropdown.emit()
  }

  selectedLabel(){
    if(this.chosenOption() != null){
      return this.options().find((o: option) => o.value == this.chosenOption())?.label
    }
    else if( this.selectedOptionTitle != null){
      return this.options().find((o: option) => o.value == this.selectedOptionTitle)?.label
    }
    else{
      return null;
    }
  }

  

  optionSelect(option: option){
    if(option.disabled !== true && !option.link){
      this.chosenOptionChange.emit(option.value)
      this.doFunction.emit(option)
      if( !option.dontShowSelect){
        this.selectedOption = option.value      
        this.selectedOptionTitle = option.value 
      }   
    }
    
  }
}
