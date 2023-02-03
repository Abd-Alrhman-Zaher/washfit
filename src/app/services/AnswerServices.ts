import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Answer } from "../data/Answer";


@Injectable()
export class AnswerServices{
   
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
    
    insert(e:Answer):Observable<any>{
        return this.http.post("http://localhost/climateAction/api/Answers",e,this.httpOptions)
    }
    loadAll():Observable<any>{
        return this.http.get("http://localhost/climateAction/api/Answers",this.httpOptions);
    }
    update(a:Answer):Observable<any>{
        return this.http.post("http://localhost/climateAction/api/Answers/update",a,this.httpOptions)
    }
    load(u:string):Observable<any>{
        return this.http.get("http://localhost/climateAction/api/Answers/getByid?="+u,this.httpOptions);
    }
    delete(id:number):Observable<any>{
        return this.http.get("http://localhost/Assignment/api/Answers/delete?id="+id);
    }
}    