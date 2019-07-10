import { ConfigurationService } from './services/configuration-service';
import { HttpErrorResponse } from '@angular/common/http';

export function initializeConfiguration(configuration: ConfigurationService) {
  return () =>
    new Promise((resolve, reject) => {
      configuration.initialize().subscribe(
        (initialized: boolean) =>
          initialized === true ? resolve(true) : reject(),
        error => {
          if (error instanceof HttpErrorResponse && error.status === 404) {
            resolve(error);
          } else {
            reject(error);
          }
        }
      );
    });
}
