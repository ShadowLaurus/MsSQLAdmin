import { environment } from 'src/environments/environment';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private API = 'api/Info';
  constructor(private http: HttpClient) {}

  getSettings(): Observable<any> {
    return this.http
      .get(environment.settings.backend + this.API)
      .pipe(delay(1000));
  }
}
