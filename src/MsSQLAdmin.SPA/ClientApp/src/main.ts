import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { environmentLoader as environmentLoaderPromise } from './environments/environmentLoader';
import { envNormalizeUrl } from './environments/environmentDef';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [{ provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }];

environmentLoaderPromise.then(env => {
  if (environment.production) {
    enableProdMode();
  }

  environment.settings = env.settings;
  environment.settings.backend = envNormalizeUrl(environment.settings.backend);

  platformBrowserDynamic(providers)
    .bootstrapModule(AppModule)
    .catch(err => console.log(err));
});
