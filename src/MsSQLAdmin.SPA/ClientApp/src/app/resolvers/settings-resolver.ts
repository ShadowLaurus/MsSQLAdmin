import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EnvSetting, environment } from 'src/environments/environment';

@Injectable()
export class SettingsResolver implements Resolve<EnvSetting> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): EnvSetting | Observable<EnvSetting> | Promise<EnvSetting> {
    return environment.settings;
  }
}