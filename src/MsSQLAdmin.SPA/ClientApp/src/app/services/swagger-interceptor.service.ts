import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SwaggerInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const search = '/swagger/';
    if (request.url.indexOf(search) !== -1) {
      request = request.clone({
        url:
          environment.settings.backend +
          request.url.substring(request.url.indexOf(search) + search.length),
      });
    }

    return next.handle(request);
  }
}
