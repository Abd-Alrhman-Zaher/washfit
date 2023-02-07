import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { categories } from "../data/categories";
import {environment} from "../../environments/environment";

@Injectable()
export class categoriesServices{

    httpOptions
    constructor(private http:HttpClient){
        let userInfo =window.localStorage.getItem("token") as any;

       this.httpOptions={

          headers:new HttpHeaders({


              'Accept': 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + userInfo,
          })
      };
     }

    insert(c:categories):Observable<any>{
        return this.http.post(environment.serverUrl + "QuestionCategory",c,this.httpOptions)
    }
    loadAll():Observable<any>{
        return this.http.get(environment.serverUrl + "QuestionCategory",this.httpOptions);
    }
}
