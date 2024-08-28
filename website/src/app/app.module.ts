import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomNavbarModule } from './custom-navbar/custom-navbar.module';
import { SectionsModule } from './sections/sections.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomNavbarModule,
    SectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
