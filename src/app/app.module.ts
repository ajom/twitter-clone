import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppBootstrapModule } from './app-bootstrap.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { SearchbarComponent } from './searchbar.component';

import { TwitterService } from './twitter.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppBootstrapModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchbarComponent
  ],
  providers: [TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
