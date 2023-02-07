import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { question } from "../data/question";
import {environment} from "../../environments/environment";



@Injectable()
export class questionServices{

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

    insert(e:question):Observable<any>{
        return this.http.post(environment.serverUrl + "Question",e,this.httpOptions)
    }
    loadAll():Observable<any>{
        return this.http.get(environment.serverUrl + "Question",this.httpOptions);
    }
    update(w:question):Observable<any>{
        return this.http.post(environment.serverUrl + "Question/update",w,this.httpOptions)
    }
    loadbyid(id:number):Observable<any>{
        return this.http.get(environment.serverUrl + "Question/getById?id="+id,this.httpOptions);
    }
    delete(id:number):Observable<any>{
        return this.http.get(environment.serverUrl + "Question/delete?id="+id,this.httpOptions);
    }
}
