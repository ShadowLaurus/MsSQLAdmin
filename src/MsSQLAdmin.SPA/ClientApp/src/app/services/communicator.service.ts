import { Injectable, Output } from '@angular/core';
import { SettingsService } from './settings.service';
import { Action } from '../@models/action';
import { Observable } from 'rxjs';
import { ActionTypes } from './action-types.enum';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root',
})
export class CommunicatorService {
  constructor(private settingsService: SettingsService) {}

  /**
   * Dispatch normalized Action from component to service
   * @param action the current action
   */
  dispatch(action: Action): Observable<Action> {
    switch (action.type) {
      case ActionTypes.SETTINGS_GET:
        return this.settingsService.getSettings().pipe(
          map(data => {
            action.result = data;
            return action;
          })
        );

      default:
        break;
    }
  }
}
