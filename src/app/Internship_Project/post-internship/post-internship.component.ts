import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-internship',
  templateUrl: './post-internship.component.html',
  styleUrls: ['./post-internship.component.css']
})
export class PostInternshipComponent {

  constructor(private router:Router){

  }
  // postIntern:string="Post New Internship";

  onPost(){
    window.alert("Successfully Registered.");
    this.router.navigate(['applied_internship']);

  }

}
