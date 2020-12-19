import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  employee:any

  name:string = "Ashwini"
  empno:number = 123

  constructor(
    private router: Router,
    private emp: EmpServiceService
  ) { }

  ngOnInit(): void {
    this.employee=this.emp.employee
  }

  std(){
    this.router.navigate(['std'])
  }

}
