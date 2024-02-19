import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees:any

  constructor(private http:HttpClient){
    this.http.get("https://jsonplaceholder.typicode.com/users/").subscribe(data=>this.employees=data)

  }
}
