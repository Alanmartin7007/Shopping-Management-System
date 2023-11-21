import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

export const routeAuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthServiceService).isloggedin();
  //return true;
};
