import { ActionTypes } from './action-types.enum';
import { CommunicatorService } from './communicator.service';
import { AsyncSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment, envNormalizeUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor(private com: CommunicatorService) {}

  public initialize(): AsyncSubject<true | any> {
    const initialized: AsyncSubject<boolean> = new AsyncSubject();

    // récupération de la configuration dynamique par http
    this.com
      .dispatch({ type: ActionTypes.SETTINGS_GET, payload: null })
      .subscribe(
        action => {
          if (action.result.backend) {
            environment.settings.backend = envNormalizeUrl(
              action.result.backend
            );
          }
          if (action.result.version) {
            environment.version = action.result.version;
          }

          initialized.next(true);
          initialized.complete();
        },
        (error: any) => {
          initialized.error(error);
        }
      );

    return initialized;
  }
}
