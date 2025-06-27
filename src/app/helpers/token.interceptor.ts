import { Injectable, inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../account/service/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private authService = inject(AuthService)

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // extra header voor speciale tekens zoals é etc.
    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=utf-8') })
    
    if (this.authService.bearerToken !== '') {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.bearerToken}`
        }
      });
    }
    
    return next.handle(request);
  }
}