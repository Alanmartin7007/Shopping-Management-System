import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routeAuthGuard } from './route-auth.guard';

describe('routeAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routeAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
