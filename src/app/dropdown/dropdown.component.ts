import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup,ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor,OnInit {
  @Input() dropdownLabel: string;
  @Input() options: string[];
  @Input() defaultValue:string;

  cloneOptionsArr: string[];

  myform: FormGroup;
  mycontrol: FormControl;

  inputClicked: boolean = false;
  optionSelected: boolean = false;
  hasDefultValue:boolean=false;
  

  // Function to call when the option selected changes.
  onChange = (option: string) => {  };
  // Function to call when the input is touched (when a dropdown is show).
  onTouched = () => {  };

  constructor() {}

  ngOnInit(): void {
    this.mycontrol = new FormControl();
    this.myform = new FormGroup({});
    this.cloneOptionsArr = this.options;
    if(this.defaultValue!==null&&this.defaultValue!==undefined){
      this.mycontrol.setValue(this.defaultValue);
      this.hasDefultValue=true;
    }
  }

  onDropdownItemSelect(option: string) {
    this.mycontrol.setValue(option);
    this.inputClicked = false;
    this.optionSelected = true;
    this.writeValue(option)
  }
  inputClick() {
    this.inputClicked = true;
  }
  inputBlur() {
    this.inputClicked = false;
  }

  onInput() {
    if (this.mycontrol.value !== null && this.mycontrol.value !== '') {
      this.options = this.cloneOptionsArr.filter((o) =>
        o.toLowerCase().includes(this.mycontrol.value.toLowerCase())
      );
      this.options.find((o) => {
        if (this.mycontrol.value !== o) {
          this.optionSelected = false;
        } else{
            this.optionSelected = true
            this.writeValue(o);
          };
      });
    } else this.options = this.cloneOptionsArr;
  }

  writeValue(option: string): void {
    this.onChange(option)
  }
  registerOnChange(fn: (option: string) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    // this.onTouched = fn;
  }
  
  // Allows Angular to disable the input.
  // setDisabledState(isDisabled: boolean): void {
  //   // this.disabled = isDisabled;
  // }
}
