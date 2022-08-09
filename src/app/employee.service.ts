import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url : string = "http://localhost:3000/Employees"
  constructor(private http :HttpClient) { }

  GetEmployees():Observable<any>
  {
    return this.http.get<any>(this.url);

  }


}
