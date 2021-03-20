import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dropdown';
  myform:FormGroup;
  dropdownControl:FormControl;
  dropdownTitle='Dropdown'
  dropdownNgContentControl:FormControl;

  options:string[]=[ 'egypt', 'ismailia', 'suez', 'gize', 'helwan', 'portsaid', 'loxur', 'assuit'] ;

  ngOnInit():void{
    this.myform=new FormGroup({});
    this.dropdownControl=new FormControl();
    this.dropdownNgContentControl=new FormControl();

  };
  
  ngDoCheck(){
    console.log(this.dropdownNgContentControl)
    console.log(this.dropdownControl)

  } 
}
