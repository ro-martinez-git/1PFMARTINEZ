import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AlumnosModule } from './alumnos/alumnos-module';
import { LayoutModule } from './layout/layout-module';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlumnosModule, 
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule
],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
