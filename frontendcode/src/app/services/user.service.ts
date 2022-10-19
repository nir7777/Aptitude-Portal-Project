import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //add user function
  // public addUser(user: any): Observable<any> {
  //   return this.http.post<any>(`http://localhost:8080/user/`, user);
  // }

  public addUser(user:any){
    return this.http.post(`${baseUrl}/user`,user);
  }
}
