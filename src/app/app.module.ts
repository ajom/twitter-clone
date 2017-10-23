import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppBootstrapModule } from './app-bootstrap.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppBootstrapModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
