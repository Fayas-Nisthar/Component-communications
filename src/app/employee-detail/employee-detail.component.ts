import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  id:any
  employeeData:any
  constructor(private route:ActivatedRoute, private http:HttpClient){
    this.id=this.route.snapshot.params["pk"]
    this.http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`).subscribe(data=>this.employeeData=data)
  }
}
