import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/angular';
import { authRoutes, AuthModule, AuthGuard } from '@demo-app/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@demo-app/layout';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'products'},
        { path: 'auth', children: authRoutes },
        {
          path: 'products',
          // loadChildren: '@demo-app/products#ProductsModule'
          // loadChildren: '@demo-app/products'
          loadChildren: () =>
            import('@demo-app/products').then(
              (module) => module.ProductsModule
            ),
          canActivate: [AuthGuard]
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    AuthModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
