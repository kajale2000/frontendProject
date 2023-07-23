import { Component, OnInit, forwardRef } from '@angular/core';

import { Interns } from '../intern';
import { Router } from '@angular/router';
import { InternserviceService } from 'src/app/internservice.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
  providers: [ InternserviceService ]
})
export class StudentRegistrationComponent implements OnInit {

  registration: string = "Student Registration";
  intern: Interns = new Interns();

  constructor(private service: InternserviceService, router:Router) { }

  ngOnInit(): void { }

  onFormSubmitt() {
    // console.log(this.intern);
    this.registerIntern();
    
  }

  private registerIntern() {
    this.service.registerInterns(this.intern).subscribe();
      console.log("Successfully Registered....")

  }

  toRegister(){
    window.alert("You Have Register successfuly");
  }

  
}
