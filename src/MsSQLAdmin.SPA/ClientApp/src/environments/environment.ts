// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export interface Environnement {
  production: boolean;
  name: string;
  version: string;
  settings: EnvSetting;
}
export interface EnvSetting {
  backend: string;
}

export function envNormalizeUrl(url: string): string {
  if (url && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
}

export const environment: Environnement = {
  production: false,
  name: 'dev',
  version: 'DEV',
  settings: {
    backend: 'https://localhost:5001/',
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
