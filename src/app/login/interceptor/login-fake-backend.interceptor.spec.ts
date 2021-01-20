import { TestBed } from '@angular/core/testing';

import { LoginFakeBackendInterceptor } from './login-fake-backend.interceptor';

describe('LoginFakeBackendInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoginFakeBackendInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoginFakeBackendInterceptor = TestBed.inject(LoginFakeBackendInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
