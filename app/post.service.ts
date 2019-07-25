import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators";
//import  'rxjs/add/operator/map';
//import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
 
export class PostService {
  provideIn : 'root';
  constructor(private http: Http){
  }

  getPosts(){
      return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(res=>
          res.json()));
  }
  
}
