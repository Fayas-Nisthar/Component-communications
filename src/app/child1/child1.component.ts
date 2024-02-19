import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
  @Input() context:string=""
  @Output() context2= new EventEmitter()

  text2:string=""
  
  sendToParent(){
    this.context2.emit(this.text2)
    
  }

}
