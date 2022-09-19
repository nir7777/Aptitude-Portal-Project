import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  //load all the categories
  public categories()
  {
    return this._http.get(`http://localhost:8080/category/`);
  }
}
