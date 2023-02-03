import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Domains } from "../data/domains";


@Injectable()
export class domainsServices{
   
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
    
    insert(e:Domains):Observable<any>{
        return this.http.post("http://localhost/climateAction/api/Domains",e,this.httpOptions)
    }
    loadAll():Observable<any>{
        return this.http.get("http://localhost/climateAction/api/Domains",this.httpOptions);
    }
    update(a:Domains):Observable<any>{
        return this.http.post("http://localhost/climateAction/api/Domains/update",a,this.httpOptions)
    }
    load(u:string):Observable<any>{
        return this.http.get("http://localhost/climateAction/api/Domains/getByid?="+u,this.httpOptions);
    }
    delete(id:number):Observable<any>{
        return this.http.get("http://localhost/Assignment/api/Domains/delete?id="+id);
    }
}    