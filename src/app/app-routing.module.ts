import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './Internship_Project/student-registration/student-registration.component';
import { InternshipHomeComp } from './Internship_Project/Home/home.component';
import { RecruiterLoginComponent } from './recruiter-login/recruiter-login.component';
import { WelcomeStudentComponent } from './Internship_Project/welcome-student/welcome-student.component';
import { FindinternshipComponent } from './Internship_Project/findinternship/findinternship.component';
import { AppliedInternshipComponent } from './Internship_Project/applied-internship/applied-internship.component';
import { WelcomeCompanyComponent } from './Internship_Project/welcome-company/welcome-company.component';
import { PostInternshipComponent } from './Internship_Project/post-internship/post-internship.component';
import { ApplicationStatusComponent } from './Internship_Project/application-status/application-status.component';
import { ListComponent } from './list/list.component';
import { InterndetailComponent } from './interndetail/interndetail.component';
//import { UpdateinternComponent } from './updateintern/updateintern.component';

const routes: Routes = [
  // {path: 'login', component:StudentLoginComponent}
{
  path:'addInterns',
  component:StudentRegistrationComponent
},
{

  path:'list',
  component:ListComponent

},
{
  path:'detail/:id',
  component:InterndetailComponent


},
{ 
  path: 'homecomp',
  component:InternshipHomeComp
},

{
    path: 'Studentlogin',
  component:StudentLoginComponent
},

{
  path: 'Recruiterlogin',
  component:RecruiterLoginComponent
},

{
    path: 'student_registration',
     component:StudentRegistrationComponent
},

{
    path: 'studenthome',
    component:WelcomeStudentComponent
},
{
    path: 'find_internship',
    component:FindinternshipComponent
},
  {
    path: 'applied_internship',
    component:AppliedInternshipComponent
},

// {     
//   path: 'welcome_company',
//   component:WelcomeCompanyComponent
// },
{
    path: 'welcome_company',
    component:WelcomeCompanyComponent
},
{  
  path: 'post_internship',
  component:PostInternshipComponent
},
{   
  path:'application_status',
  component:ApplicationStatusComponent
},
// {   
//   path:'update',
//   component:UpdateinternComponent
// },

{ 
  path: '',redirectTo:'homecomp',pathMatch:'full'
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
