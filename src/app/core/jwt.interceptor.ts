import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  selectedLanguage: any = (localStorage.getItem('language')) ? localStorage.getItem('language') : 'en';

  constructor(
    private authService: AuthService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger
    const header = req.headers.set("Accept-Language", this.selectedLanguage)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
    const anonymousReq = req.clone({
      headers: header
    });

    /*   if (!this.authService.isAuthunticated()) {
         return next.handle(anonymousReq);
       } else {*/
    const authReq = req.clone({
      headers: header
        .set('Authorization', `Bearer ${this.authService.getToken()}`)
        .set("Accept-Language", this.selectedLanguage)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
    });
    // @ts-ignore
    return next.handle(authReq).toPromise();
    /* }*/
  }
}
