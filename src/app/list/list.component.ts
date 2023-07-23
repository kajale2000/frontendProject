import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Interns } from '../Internship_Project/intern';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { InternserviceService } from '../internservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  public intern: Observable<Interns[]> =of([]);
  
  constructor(private service: InternserviceService,private router: Router) {
      
    }

  ngOnInit() {
    this.getAll();
   
  }

  getAll() {
    this.intern=this.service.getIntern();
  }

  internDetails(id:number){
    this.router.navigate(['detail',id]);
  }
  // updateDetails(id:number){
  //   this.router.navigate(['update',id]);
  // }

  
  internDelete(id:number){

    return this.service.internDelete(id).subscribe((data)=>{
      console.log(data);
      this.getAll();

    })
  
  }
}
