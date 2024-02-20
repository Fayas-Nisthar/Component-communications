import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  id:any
  employeeData:any
  constructor(private route:ActivatedRoute, private service:UserService){
    this.id=this.route.snapshot.params["pk"]
    this.service.retrieveEmployeeData(this.id).subscribe(data=>this.employeeData=data)
  }
}
