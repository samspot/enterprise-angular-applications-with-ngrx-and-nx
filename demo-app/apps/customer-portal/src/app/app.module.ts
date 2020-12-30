import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/angular';
import {authRoutes, AuthModule} from '@demo-app/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@demo-app/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot([{path: 'auth', children: authRoutes}],
      { initialNavigation: 'enabled' }),
    AuthModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

