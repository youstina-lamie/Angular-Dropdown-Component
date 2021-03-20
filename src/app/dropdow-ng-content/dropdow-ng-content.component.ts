import { Component, OnInit, forwardRef, ElementRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor,NG_VALUE_ACCESSOR } from '@angular/forms';
import { Event } from '@angular/router';


@Component({
  selector: 'app-dropdow-ng-content',
  templateUrl: './dropdow-ng-content.component.html',
  styleUrls: ['./dropdow-ng-content.component.scss'],providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>DropdowNgContentComponent),
      multi: true
    }
  ]
})
export class DropdowNgContentComponent implements OnInit,ControlValueAccessor {

  showDropdown: boolean = false;
  option:any;

  
  onChange = (option: string) => {  };
  onTouched = () => {};

  constructor(){};
  
  
  ngOnInit(): void {
  }
  selectedOption(e:Event) {
    this.option=e['target'].innerText;
    this.writeValue(this.option);
  }

  writeValue(option: string): void {
    this.onChange(option)
  }
  registerOnChange(fn: (option: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {  }

}
