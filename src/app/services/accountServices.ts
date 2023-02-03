import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { loginModel } from "../data/loginModel";



@Injectable()
export class accountServices{
    
    httpOptions
    constructor(private http:HttpClient){
        let userInfo =window.localStorage.getItem("token") as any;
        debugger
       this.httpOptions={
          
          headers:new HttpHeaders({
              

              'Accept': 'application/json',
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + userInfo,
          })
      };
     }


    login(login:loginModel):Observable<any>{
        var r = this.http.post("http://localhost/climateAction/api/Account/Login",login,this.httpOptions)
        return r
    }
}