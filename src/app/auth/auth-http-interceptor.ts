import { Injectable } from '@angular/core'
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';

import { filter, Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //throw new Error('Method not implemented.');
        //console.log(req);
        const modifiedReq = req.clone({
            withCredentials: true
        });
        return next.handle(modifiedReq);
    }

}
