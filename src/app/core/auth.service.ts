import {Injectable} from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  getToken() {
    return localStorage.getItem("jwt");
  }

  getClaim(claim: string): any {
    const token = localStorage.getItem('jwt');
    if (!token) return null;
    const decoded: any = jwt_decode(token);
    if (!decoded) return null;
    return decoded[claim];
  }

  isAuthunticated(): boolean {
    const date = this.getTokenExpirationDate();
    if (date == null) return false;
    return (date.valueOf() > new Date().valueOf());
  }

  getTokenExpirationDate(): Date | null {
    const claim = this.getClaim('exp');
    if (!claim) return null;
    const date = new Date(0);
    date.setUTCSeconds(claim);
    return date;
  }
}
