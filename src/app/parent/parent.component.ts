import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message:string="This is a message from parent"
  data:string=""
  receiveMessage(data:any){
    this.data=data
  }
}
