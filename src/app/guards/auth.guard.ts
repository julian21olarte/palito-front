import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) { }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.getCurrentUser()
        .pipe(map(currentUser => {
            if (currentUser) {
                return true;
            } else {
                this.router.navigate(['/login']);
            }
        }),
        catchError((err) => {
            this.router.navigate(['/login']);
            return of(false);
        }));
  }
}
