import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { question } from "../data/question";



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
        return this.http.post("http://localhost/climateAction/api/Question",e,this.httpOptions)
    }
    loadAll():Observable<any>{
        return this.http.get("http://localhost/climateAction/api/Question",this.httpOptions);
    }
    update(w:question):Observable<any>{
        return this.http.post("http://localhost/climateAction/api/Question/update",w,this.httpOptions)
    }
    loadbyid(id:number):Observable<any>{
        return this.http.get("http://localhost/climateAction/api/Question/getById?id="+id,this.httpOptions);
    }
    delete(id:number):Observable<any>{
        return this.http.get("http://localhost/climateAction/api/Question/delete?id="+id,this.httpOptions);
    }
    LoadAllDomians(): Observable<any> {
        return this.http.get<any>("http://localhost/climateAction/api/Domains/");
    }
}    