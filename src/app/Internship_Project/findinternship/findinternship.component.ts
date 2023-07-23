import { Component } from '@angular/core';

@Component({
  selector: 'app-findinternship',
  templateUrl: './findinternship.component.html',
  styleUrls: ['./findinternship.component.css']
})
export class FindinternshipComponent {


  onapply(){
  window.alert("Successfully Apply");
  // this.router.navigate(['applied_internship']);
  }
  

}
