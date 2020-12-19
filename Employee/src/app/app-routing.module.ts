import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'emp', component:EmpComponent},
  {path: 'std', component:StudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
