import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {loginModel} from "../data/loginModel";
import {environment} from "../../environments/environment";


@Injectable()
export class accountServices {


  constructor(private http: HttpClient) {
  }

  login(login: loginModel): Observable<any> {
    return this.http.post(environment.serverUrl + "Account/Login", login)
  }
}
