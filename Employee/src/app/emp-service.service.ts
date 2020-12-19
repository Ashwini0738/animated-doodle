import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  employee:any = [{name:'Ashwini',empno:123},
              {name:'Ashwitha',empno:345},
              {name:'Meghana',empno:789},
            ]
            
  constructor() { }
}
