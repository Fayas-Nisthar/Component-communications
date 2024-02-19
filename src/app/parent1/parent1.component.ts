import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
  text1:string=""
  data1:string=""
  data2:string=""
  sendToChild(){
    this.data1=this.text1
  }
  receiveFromChild(text2:any){
    this.data2=text2
  }

}
