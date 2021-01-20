import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { throwError } from 'rxjs';

const basePath = './service/login';

@Injectable()
export class LoginFakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request);
    const { url, method, headers, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(10))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.indexOf(basePath) !== -1 && method === 'POST':
          return ok();
        default:
          return next.handle(request);
      }
    }

    function getAuthentication(name: string, password: string) {
      if (name == 'user' && password == '12345') {
        return ok();
      }
    }

    // helper functions

    function ok(bodyContent?) {
      return of(new HttpResponse({ status: 200, body: bodyContent }));
  }

    function error(message: string) {
        return throwError({ error: { message } });
    }
  }
}
