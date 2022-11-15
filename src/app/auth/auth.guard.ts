import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, skip } from 'rxjs';
import { AuthService } from './auth.service';
import { take,skipWhile,tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.signedin$.pipe(
      skipWhile(value => value === null),
      take(1),
      tap((authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/')
        }
      })
    );
  }
}