import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { categories } from "../data/categories";
import {environment} from "../../environments/environment";

@Injectable()
export class categoriesServices{
    constructor(private http:HttpClient){}


    insert(c:categories):Observable<any>{
        return this.http.post(environment.serverUrl + "QuestionCategory",c)
    }
    loadAll():Observable<any>{
        return this.http.get(environment.serverUrl + "QuestionCategory");
    }
}
