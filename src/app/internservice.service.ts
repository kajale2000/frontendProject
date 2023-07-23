import { Injectable } from '@angular/core';

import{Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Interns } from './Internship_Project/intern';

@Injectable({
  providedIn: 'root'
})
export class InternserviceService {
  updateIntern(intern: Interns) {
    throw new Error('Method not implemented.');
  }
  baseUrl='http://localhost:8082';
  constructor(private http:HttpClient) { }

  //registrering data intern
  registerInterns(intern:Object):Observable<Object>{
    console.log(intern);
    return this.http.post(`${this.baseUrl}/addintern`,intern);
  }

     //get interns by id
  getIntern():any{
      return this.http.get(`${this.baseUrl}/interns`);
  }

  //get intern by id
  getOneIntern(id:number){
    return this.http.get(`${this.baseUrl}/interns/${id}`);
  }

  // delete intern by id
  internDelete(id:number){
    return this.http.delete(`${this.baseUrl}/deleteinterns/${id}`,{responseType:'text'});

  }


}




   

    

   