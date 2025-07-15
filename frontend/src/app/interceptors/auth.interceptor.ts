import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  console.log('AuthInterceptor: Token retrieved:', token);
  if (token) {
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }

//   return next(req);

   return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // try to refresh token
        return authService.refreshAccessToken().pipe(
          switchMap((res) => {
            authService.setToken(res.token);
            const cloned = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${res.token}`)
            });
            return next(cloned); // retry with new token
          }),
          catchError(() => {
            authService.logout();
            return throwError(() => error);
          })
        );
      }
      return throwError(() => error);
    })
  );
};
