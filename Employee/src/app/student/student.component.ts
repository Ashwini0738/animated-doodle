import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  employee:any

  constructor(
    private emp: EmpServiceService
  ) { }

  ngOnInit(): void {
    this.employee=this.emp.employee
  }

}
