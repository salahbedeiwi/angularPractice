import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css']
})

export class MainLoginComponent implements OnInit {
  developer = 'Salah';
  school: any = 2019;
  age = 30;
  yearOfSchool= 2019;
  employee = { name: 'Salah I. Bedeiwi', yrsOfExperience : 5 };
  skills: any = ['PHP', 'Angular 4', 'ASP.NET', 125]; //any - you can add any value (string, array, int, number, ...)
  address: string[] = ['123 Sample St Ave', '333 33rd Ave']; //create an array of string - means you can only add strings
  salaries: [string, number] = ['salah', 125];//here must follow string value first, then number
  //info
  info : [string, string, number, string, number, string] = [this.developer, this.address[0], this.age, this.address[1], this.yearOfSchool, this.employee.name];

  //ANYTHING GO INSIDE THIS CONSTUCTOR WILL INITIALLY WORK ONCE YOUR FIRE YOUR APP
  constructor() { 
    this.developer = ''; //this referes to this class
  }

  updateAge:any;
  ngOnInit() {
    this.developer = 'Bedeiwi';
    this.updateName();
    this.changeAge(25);
    this.school = 'UMN';
  }

  updateName(){
    this.developer = 'Imad';
    this.age += 29;
  }

  changeAge(x){
    this.updateAge = this.age + x;
  }

}
