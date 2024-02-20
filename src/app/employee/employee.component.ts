import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees:any

  constructor(private service:UserService){
    this.service.getEmployees().subscribe(data=>this.employees=data)
  }
}
