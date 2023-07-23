import { Component, OnInit } from '@angular/core';
import { Interns } from '../Internship_Project/intern';
import { ActivatedRoute, Router } from '@angular/router';
import { InternserviceService } from '../internservice.service';

@Component({
  selector: 'app-interndetail',
  templateUrl: './interndetail.component.html',
  styleUrls: ['./interndetail.component.css']
})
export class InterndetailComponent implements OnInit{

  intern_id:any;
    interns:Interns=new Interns();
    constructor(private route:ActivatedRoute,private router:Router,private service:InternserviceService){}

    ngOnInit() {
      this.interns=new Interns();
      this.intern_id=this.route.snapshot.params['intern_id'];
      this.service.getOneIntern(this.intern_id).subscribe((data)=>{
        console.log(data);
        // this.interns=data;
      })
    }
    listIntern(){
      this.router.navigate(['list']);
    }


}
