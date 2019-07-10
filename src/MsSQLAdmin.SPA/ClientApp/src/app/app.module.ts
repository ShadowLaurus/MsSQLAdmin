import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER, Injector, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SettingsResolver } from './resolvers/settings-resolver';
import { initializeConfiguration } from './app-initializers';
import { ConfigurationService } from './services/configuration-service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router } from '@angular/router';
import { SwaggerInterceptorService } from './services/swagger-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeFrFr from '@angular/common/locales/fr';
import localeFrFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFrFr, localeFrFrExtra);

@NgModule({
  declarations: [AppComponent, HomeComponent, NavMenuComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfiguration,
      deps: [ConfigurationService],
      multi: true,
    },
    SettingsResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SwaggerInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    if (!environment.production) {
      const replacer = (key, value) =>
        typeof value === 'function' ? value.name : value;
      console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
  }
}
