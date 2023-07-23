// import { Component, OnInit } from '@angular/core';
// import { Interns } from '../Internship_Project/intern';
// import { ActivatedRoute, Router } from '@angular/router';
// import { InternserviceService } from '../internservice.service';

// @Component({
//   selector: 'app-updateintern',
//   templateUrl: './updateintern.component.html',
//   styleUrls: ['./updateintern.component.css']
// })
// export class UpdateinternComponent implements OnInit {

//   id:number=0;
//   intern:Interns=new Interns();
//   constructor(private route:ActivatedRoute,private router:Router,private service:InternserviceService){}



  
//     ngOnInit()
//    {
//     this.intern=new Interns();
//     this.id=this.route.snapshot.params['id'];
//     this.service.getOneIntern(this.id).subscribe((data)=>{
//       console.log(data);
//       //this.intern=data;
//     })
//   }
//   onSubmit(){
//     this.updateIntern();
//   }
//   updateIntern(){
//     this.service.updateIntern(this.intern).subscribe((data:any)=>{
//       console.log(data);
//       this.intern=new Interns();
//       this.gotoList();

//     })
//   }
//   gotoList():any
//   {
//     this.router.navigate(['list']);
//   }
// }


