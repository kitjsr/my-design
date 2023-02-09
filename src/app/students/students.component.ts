import { Component } from '@angular/core';
import studentsData from '../../students.json';  
import employeesData from '../../employees.json';  

interface Student {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
}  
interface Employee{
  id: Number;  
  firstName: String;  
  lastName: String;  
  photo: String;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent {
  students: Student[] = studentsData;
  employees: Employee[] = employeesData;
}
