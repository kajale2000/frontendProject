// import{ Injectable} from '@angular/core'
// import { Interns } from './intern';
// import{Observable} from 'rxjs';
// import {HttpClient} from '@angular/common/http';

// @Injectable()
// export class InterService{

//     baseUrl='http://localhost:8082';

//     constructor(private http:HttpClient){ }

   

//     //registrering data intern
//     registerInterns(intern:Interns):Observable<Object>{
//         console.log(intern);
//         return this.http.post(`${this.baseUrl}/addintern`,intern);

//     }

//      //get interns by id
//      getIntern(id:number):Observable<Interns>{
//         return this.http.get<Interns>(`${this.baseUrl}/${id}}`);
//     }
// }