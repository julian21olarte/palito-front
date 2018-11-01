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
    console.log('entra al guard 1');
      return this.authService.getCurrentUser()
        .pipe(map(currentUser => {
          console.log('entra al guard');
            if (currentUser) {
              console.log('existe el usuario en el guard');
                return true;
            } else {
                this.router.navigate(['/login']);
            }
        }),
        catchError((err) => {
            console.log('Error en guard: ', err);
            this.router.navigate(['/login']);
            return of(false);
        }));
  }
}
